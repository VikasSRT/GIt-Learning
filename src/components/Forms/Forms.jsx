import { useForm } from "react-hook-form"
import React, { useEffect, useId, useState } from 'react'

const Forms = () => {
    const id = useId()
    const [submittedData, setSubmittedData] = useState([])
    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm()
    const onSubmit = (data) => {
        console.log("data", data);
        setSubmittedData([...submittedData, data])
    }

    console.log("isSubmit successful", isSubmitSuccessful);
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, submittedData, reset]);

    return (
        <>
            <div className='text-white flex w-[90%] gap-8 mx-auto justify-between'>
                <form className='flex flex-col mt-10 gap-5' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center font-semibold max-w-[498px]'>SURVEY FORM</h1>
                    <div className='flex flex-col max-w-[550px] items-center gap-3.5'>

                        <div className='flex w-full flex-col gap-3.5 '>
                            <label htmlFor={id + 'name'}>Name:</label>
                            <input
                                required
                                type='text' id={id + 'name'}
                                {...register("name")}
                                className='bg-zinc-200 text-black rounded p-1 max-w-[498px]' name='name' />

                            {errors.name && (<span className="text-red-500">{errors?.name?.message}</span>)}

                            <label htmlFor={id + 'email'}>Email:</label>
                            <input
                                required
                                type='email' id={id + 'email'}
                                {...register("email")}
                                className='bg-zinc-200 text-black p-1 rounded max-w-[498px]' name='email' />
                            {errors.email && (<span className="text-red-500">{errors?.email?.message}</span>)}
                        </div>

                        <div className='flex w-full flex-col gap-3.5'>
                            <p className=''>Select your vehicle:</p>
                            <select required {...register("vehicle")} className='border-zinc-600 border-1 p-1.5 rounded 
                            max-w-[498px]'>
                                <option value="">Select</option>
                                <option value="Cycle">Cycle</option>
                                <option value="Bike">Bike</option>
                                <option value="Car">Car</option>
                            </select>
                        </div>

                        <div className='flex gap-3.5 items-center w-full mb-2.5'>
                            <p>Select your gender: </p>
                            <input {...register("gender", { required: "gender is required" })} type='radio' id={id + 'male'} name='gender' value="Male"
                                className='size-5' />
                            <label htmlFor={id + 'male'}>Male</label>

                            <input {...register("gender")} type='radio' id={id + 'female'} name='gender' value="Female"
                                className='size-5' />
                            <label htmlFor={id + 'female'}>Female</label>
                            {errors.gender && (<span className="text-red-500">{errors?.gender?.message}</span>)}
                        </div>

                        <div className='flex gap-3.5 justify-center w-full mb-2.5'>

                            <p>What's your hobby:</p>

                            <div className="flex items-center gap-3.5">
                                <input {...register("hobbies", {
                                    required: true
                                })} type='checkbox' id={id + 'Travelling'} name='hobbies' className='size-5' value="Travelling" />
                                <label htmlFor={id + 'Travelling'}>Travelling</label>

                                <input {...register("hobbies", {
                                    required: true
                                })} type='checkbox' id={id + 'Sports'} name='hobbies' className='size-5' value="Sports" />
                                <label htmlFor={id + 'Sports'}>Sports</label>

                                <input {...register("hobbies", {
                                    required: true
                                })} type='checkbox' id={id + 'Video-Games'} name='hobbies' className='size-5' value="Video Games" />
                                <label htmlFor={id + 'Video-Games'}>Video Games</label>
                                {errors.hobbies && <span className="text-red-500">*</span>}
                            </div>
                        </div>
                    </div>

                    <button type='submit' className='bg-green-500 p-2 rounded max-w-[498px] cursor-pointer hover:bg-zinc-900 hover:text-green-500 hover:border-1 hover:border-green-500'>Submit</button>
                </form>

                <div className='flex flex-col mt-10'>
                    <table className="border-collapse border border-gray-400 table-auto max-w-[1000px] overflow-x-scroll">
                        <thead>
                            <tr>
                                <th className="p-1.5 border border-gray-300 w-[200px]">Name</th>
                                <th className="p-1.5 border border-gray-300 w-[200px]">Email</th>
                                <th className="p-1.5 border border-gray-300 w-[200px]">Vehicle</th>
                                <th className="p-1.5 border border-gray-300 w-[200px]">Gender</th>
                                <th className="p-1.5 border border-gray-300 w-[200px]">Hobby</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedData.map((cur, i) => (
                                <tr className='border-1 border-amber-50' key={i}>
                                    <td className="p-1.5 border border-gray-300 text-center">{cur.name}</td>
                                    <td className="p-1.5 border border-gray-300 text-center">{cur.email}</td>
                                    <td className="p-1.5 border border-gray-300 text-center">{cur.vehicle}</td>
                                    <td className="p-1.5 border border-gray-300 text-center">{cur.gender}</td>
                                    <td className="p-1.5 border border-gray-300 text-center">{cur?.hobbies.join(" ")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Forms