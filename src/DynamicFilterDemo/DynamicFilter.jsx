import React, { useEffect, useState } from 'react'
import dynamicdata from './dynamicdata'
import DynamicTables from './DynamicTables'
import IOSSwitch from './IOSSwitch'
import InputComp from './InputComp'

const DynamicFilter = () => {
    const [data, setData] = useState(dynamicdata)
    const [filter, setFilter] = useState([])
    const [searchText, setSearchText] = useState('')
    const [switches, setSwitches] = useState({})

    // // create tableHeaders
    // const createTableHeader = (array) => [...new Set(array.flatMap((obj) => Object.keys(obj)))]
    // const tableHeader = createTableHeader(filter)

    // // create tableBody
    // const createTableBody = (array) => array.map((cur) => Object.values(cur))
    // const tableBody = createTableBody(filter)

    // search Function
    const searchFunc = (searchText, checkFrom) => {
        const searched = searchText.toLowerCase()
        const matched = checkFrom.filter((curObj) => JSON.stringify(curObj).toLowerCase().includes(searched))
        setFilter(matched)
    }

    useEffect(() => {
        let filteredResults = data;
        let active = false

        Object.keys(switches).forEach((category) => {
            const switchesCategories = switches[category]
            console.log("switchesCategories", switchesCategories);

            const activeValues = Object.keys(switchesCategories).filter((key) => switchesCategories[key])
            console.log("activeValues", activeValues)
            
            if (activeValues.length) {
                active = true
                filteredResults = filteredResults.filter((curObj) => activeValues.some((value) => `${curObj[category]}` === value))
            }
        })

        console.log("filter", filter)
        console.log("filteredResults", filteredResults)

        if (searchText && filteredResults.length) {
            searchFunc(searchText, filteredResults)
        }
        else if (searchText) {
            searchFunc(searchText, data)
        }
        else if (active && !searchText.length) {
            setFilter(filteredResults)
        }
        else {
            setFilter(data)
        }

    }, [switches, searchText])

    // get uniqueKeys from data
    const uniqueKeys = [...new Set(data.flatMap((obj) => Object.keys(obj)))]

    // get list of categories
    const filterCategories = data.reduce((acc, curObj) => {
        uniqueKeys.forEach((key) => {
            const values = curObj[key]
            acc[key] = acc[key] || []
            acc[key].push(values)
        })
        return acc
    }, {})

    // console.log("filterCategories", filterCategories);

    // handleSwitch function
    const handleSwitch = (e, category) => {
        console.log(`e.target.name`, e.target.name)
        setSwitches((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [e.target.name]: !prev[category]?.[e.target.name]
            }
        }))
    }

    const conditionsArr = ["id", "price",  "subcategory"]

    return (
        <>
            <div className='w-[80%] mx-auto mt-4'>
                <div className='flex justify-around gap-3.5'>
                    {
                        Object.keys(filterCategories).map((category, index) => {
                            if (!conditionsArr.includes(category.toLowerCase())) {
                                return (
                                    <div className='flex flex-col' key={index}>

                                        <h1 className='text-xl mb-2.5'>{category}</h1>

                                        <ul className='flex flex-col gap-1.5'>
                                            {
                                                [...new Set(filterCategories[category])].map((value, indexVal) => {
                                                    if (`${value}`.length < 20 && value !== undefined) {
                                                        value = value?.toString()
                                                        return (
                                                            <li key={indexVal}>
                                                                <IOSSwitch name={value} onChange={(e) => handleSwitch(e, category)} /> {value}
                                                            </li>
                                                        )
                                                    }
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className='mt-4'>
                    <InputComp {...{ searchText, setSearchText }} />
                    <div className='mt-2 overflow-x-auto overflow-y-auto h-[400px]'>
                        <DynamicTables {...{ filterCategories, filter }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DynamicFilter
