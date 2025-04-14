import React from 'react'
import RadioComp from './InputTypes/RadioComp'
import CheckboxComp from './InputTypes/CheckboxComp'
import SelectComp from './InputTypes/SelectComp'
import RangeComp from './InputTypes/RangeComp'
import Input from './InputTypes/Input'
import FileInput from './InputTypes/FileInput'

const Steps = ({ formData, handleInput, handleFileChange, errors, fields, step }) => {
    return (
        <>
            {
                fields[step].map(({ label, name, type, options, required, min, max }, i) => {

                    switch (type) {
                        case "radio":
                            return (<RadioComp key={i} {...{ label, name, type, options, formData, errors, handleInput, required }} />)
                        case "checkbox":
                            return (<CheckboxComp key={i} {...{ label, name, type, options, formData, errors, handleInput, required }} />)

                        case "range":
                            return (<RangeComp key={i} {...{ label, name, type, options, formData, errors, handleInput, required, min, max }} />)

                        case "select":
                            return (<SelectComp key={i} {...{ label, name, type, options, formData, errors, handleInput, required }} />)

                        case "file":
                            return (<FileInput key={i} {...{ label, name, type, options, formData, errors, handleFileChange, required }} />)

                        case "text":
                        case "email":
                        case "tel":
                        case "number":
                        case "date":
                            return (<Input key={i} {...{ label, name, type, options, formData, errors, handleInput, required }} />)

                        default:
                            break;
                    }

                })
            }
        </>
    )
}

export default Steps