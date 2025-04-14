

import React, { useEffect, useState } from 'react'
// import Table from './Table'
import data from './data'
import Input from './input'
import IOSSwitch from './IOSSwitch'
import DynamicTable from './DynamicTable'
import { red } from '@mui/material/colors'

const Container = () => {
    const [filtered, setFiltered] = useState([])
    const [search, setSearch] = useState("")
    const [filteredBySwitch, setFilteredBySwitch] = useState([])

    const category = [...new Set(data.map((cur) => cur.category))]
    const title = [...new Set(data.map((cur) => cur.title))]
    const filterCategories = []

    data.map((curObj) => {
        Object.keys(curObj).forEach((curKey) => {
            if (!filterCategories.includes(curKey)) {
                filterCategories.push(curKey)
            }
        })
    })
    // console.log(filterCategories);
    // const reduced = data.reduce((acc, cur) => {
    //     filterCategories.forEach((obj) => {
    //         console.log("cur[obj]", cur[obj]);
    //         if (!isNaN(cur[obj]) || cur[obj]) {
    //             const category = cur[obj];
    //             acc[category] = acc[category] || [];
    //             acc[category].push(cur);
    //         }
    //     })
    //     return acc;
    // }, {});

    // console.log(reduced);

    const categoriesArr = [...category, ...title]
    const initalStateForSwitches = {}
    categoriesArr.forEach((cur) => initalStateForSwitches[cur] = false)

    const [switches, setSwitches] = useState(initalStateForSwitches)

    const filterBySearch = (search) => {
        const searchedTerm = search.toLowerCase()

        let arr = data?.filter((obj) => (obj?.title?.toLowerCase()?.includes(searchedTerm) ||
            obj?.category?.toLowerCase()?.includes(searchedTerm)))
        setFiltered(arr)
    }

    const handleSwitch = (e) => {

        setSwitches((prev) => ({
            ...prev,
            [e.target.name]: !prev[e.target.name]
        }))
    }

    useEffect(() => {
        (search) ? filterBySearch(search) : setFiltered([])

        const switchedOn = Object.keys(switches).filter((key) => switches[key] === true)

        const switchedOnValFromData = data.filter((cur) => switchedOn.some((val) => cur?.title === val || cur?.category === val))

        setFilteredBySwitch(() => switchedOnValFromData)
    }, [search, setFiltered, switches])

    // Object.keys([...data.map((cur) => cur.category)])

    // Object.keys(data.reduce((r, { title }) => (r[title] = '', r), {}))

    const showCategories = (val) => {
        return (
            val?.map((val, i) => {
                if (val?.length < 20) {
                    return (<span key={i}><IOSSwitch onChange={(e) => handleSwitch(e)} name={val} /> {val}</span>)
                }
            })
        )
    }

    return (
        <>
            <div className='min-w-[70%] max-w-[90%] mx-auto'>

                <div className='flex flex-col'>

                    <div className='flex justify-around'>

                        <div className='title flex flex-col gap-3.5'>
                            <h1 className='text-2xl font-semibold mb-2 text-center'>Title</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5'>
                                {
                                    showCategories(title)
                                }
                            </div>
                        </div>

                        <div className='category flex flex-col gap-1.5'>
                            <h1 className='text-2xl font-semibold mb-2 text-center'>Category</h1>
                            {
                                showCategories(category)
                            }
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex justify-center mt-6'>
                <div className='flex flex-col justify-center min-w-[70%] max-w-[90%] gap-1.5'>
                    <Input {...{ search, setSearch }} />

                    {/* <Table {...{ filtered, search, filteredBySwitch }} /> */}
                    <DynamicTable {...{ filtered, search, filteredBySwitch }} />
                </div>
            </div>

        </>
    )
}

export default Container