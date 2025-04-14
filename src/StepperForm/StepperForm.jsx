import React, { useEffect, useState } from 'react'
import Button from './Button'
import Steps from './Steps'
import fields from './fields'
import useValidationHook from '../customHooks/useValidationHook'

const StepperForm = () => {
    const generateInitialState = () => {
        const initialState = {}
        Object.values(fields).forEach((curArr) => {
            Object.values(curArr).forEach((curObj) => {
                const { name, type, options } = curObj
                if (type === "checkbox") {
                    options.forEach((cur) => {
                        initialState[name] = { ...initialState[name], [cur]: false }
                    })
                }
                else {
                    initialState[name] = ""
                }
            })
        })

        return initialState
    }

    // formData state to maintain form data
    const [formData, setFormData] = useState(generateInitialState())

    const [clicked, setClicked] = useState(false)
    // steps state to check steps
    const [step, setStep] = useState(1)

    const { errors, validateField, checkValidations } = useValidationHook(formData, fields, step)

    // handleFile function 
    const handleFileChange = (e) => {
        let { name, value, files } = e.target

        if (files && files[0]) {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }
    console.log("state", formData);

    // handleInput function
    const handleInput = (e) => {
        let { name, value, type, checked } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? { ...prev[name], [value]: checked } : value
        }))

        validateField(name, type, type === "checkbox" ? { ...formData[name], [value]: checked } : value)
    }

    useEffect(() => {
        if (clicked) {
            const val = Object.keys(errors).some((val) => errors[val].state)

            if (!val) {
                if (step < Object.keys(fields).length) {
                    setStep((prev) => (prev + 1))
                }
                else {
                    setFormData(generateInitialState())
                    setStep(() => 1)
                }
            }
            setClicked(false)
        }

    }, [errors])

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        checkValidations(fields[step])

        setClicked(true)

        if (step === Object.keys(fields).length) {
            Object.values(fields).map((cur) => {
                checkValidations(cur)
            })
        }
    }

    // stepsArr to show in which step user is
    const stepsArr = ["YOUR INFO", "SELECT COLLEGE", "CHOOSE DEPARTMENT", "ANY SUGGESTIONS"]

    return (
        <>
            <div className='w-full flex justify-center h-screen'>

                <div className='flex flex-col mt-5'>
                    <div className='flex'>
                        <div className='bg-blue-700 p-8'>
                            <ul className='text-white flex flex-col gap-5'>
                                {
                                    stepsArr.map((cur, i) => (
                                        <div className='' key={i}>
                                            <span className={`font-light text-sm cursor-pointer hover:text-amber-300
                                            ${step - 1 === i ? `text-amber-300 font-semibold` : ""}`} onClick={() => setStep(i + 1)}>STEP {i + 1}</span>
                                            <li className='font-bold'>{cur.toUpperCase()}</li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='bg-gray-50 rounded border-1 border-zinc-200 p-2 px-4 w-3xl'>
                            <h1 className='mb-1 text-2xl font-bold text-indigo-950'>{stepsArr[step - 1]}</h1>
                            <form className='flex flex-col mt-2 h-[750px]' onSubmit={(e) => handleSubmit(e)}>
                                <div className='flex flex-col gap-1'>
                                    <Steps {...{ formData, handleInput, errors, handleFileChange, fields, step }} />

                                    <div className='flex justify-end mt-1.5'>
                                        {
                                            (step < Object.keys(fields).length) ? <Button type="submit" text="Next Step" /> : <Button type="submit" text="Submit" />
                                        }
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepperForm


// 6 fields in each step and make your own fileds. 
// take all time of fields -> number, text, email, date, range, upload a pic,radio, dropdown, checkbox, autocomplete,

// should be fully dynamic
// Avoid repetation of code.
// code should be clean and understandable
// should be more re-usable code.
// should not include any static conditions or static things.

//deadline: 2 days --> Thrusday at 6PM THis demo should be done. NO exta time will be given for this demo. Also Will check everyting on thrusday. SO make sure you don't repeate any misktakes.
// ALSO think of real world forms like railway, or any school/clg admission form. DESIGN SHOULD BE GOOD.

// NEED VALIDATIONS on each and every fields, make some fields as optional.

// After filling all the Steps user can't go back/ or edit that form.

// Will latter expand this to add a EDIT functionality.

//NOTE: DONT USE INTERNET, NO NEED TO SEARCH ANYTHING ON WEB FOR THIS DEMO

