import { useState } from 'react'

const useValidationHook = (formData, fields, step) => {
    // errors state to set Errors
    const [errors, setErrors] = useState({})

    // function to manageErrors
    const manageErr = (state, field, msg = '') => {
        state ? setErrors((prev) => ({ ...prev, [field]: { state: true, message: msg } }))
            : setErrors((prev) => ({ ...prev, [field]: { state: false, message: msg } }))
    }

    const validateField = (name, type, value) => {
        let fieldToValidate;
        let msg;
        fields[step].forEach((cur) => {
            if (cur.name === name) {
                fieldToValidate = cur
            }
        })

        const { required } = fieldToValidate

        if (type === "checkbox") {
            msg = "please select atleast one option"
            let val = Object.keys(value).some((keys) => value[keys])
            val ? manageErr(false, name) : manageErr(true, name, msg)
        }

        else if (type === "text" && required) {
            let namePattern = /^[A-Za-z\s\-.']+$/
            msg = `enter valid ${name}`
            namePattern.test(value) ? value.length >= 2 ?
                manageErr(false, name) : manageErr(true, name, `${name} too short`) : manageErr(true, name, msg)
        }

        else if (type === "email" && required) {
            msg = "enter valid email"
            let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            emailPattern.test(value) ? manageErr(false, name) : manageErr(true, name, msg)
        }

        else if (type === "tel" && required) {
            msg = "enter valid phone number"
            let phonePattern = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/
            phonePattern.test(value) ? manageErr(false, name) : manageErr(true, name, msg)
        }

        else if (type === "radio" && required) {
            !value ? manageErr(true, name, msg) : manageErr(false, name)
        }
        else {
            !value ? manageErr(true, name, msg) : manageErr(false, name)
        }
    }

    const checkValidations = (fieldsToCheck) => {

        setErrors((previousErrors) => {
            const currentFields = fields[step].map((cur) => cur.name)
            const newErrors = {}
            Object.keys(previousErrors).forEach((errKey) => {
                if (currentFields.includes(errKey)) {
                    newErrors[errKey] = previousErrors[errKey]
                }
            })
            return newErrors
        })

        fieldsToCheck.forEach(({ name, type, required }) => {
            let msg = "Please fill this field"

            if (!formData[name] && required) {
                manageErr(true, name, msg)
            }
            else {
                manageErr(false, name)
                if (type === "checkbox") {
                    let val = Object.keys(formData[name]).some((keys) => formData[name]?.[keys])
                    !val ? manageErr(true, name, msg) : manageErr(false, name)
                }
            }
        })
    }

    return { errors, validateField, checkValidations }

}

export default useValidationHook