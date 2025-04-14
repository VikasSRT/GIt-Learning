import React, { useEffect, useState } from 'react'
import data from './data'

const DynamicTable = ({ filtered, search, filteredBySwitch }) => {
    const [state, setState] = useState({
        columns: [],
        columnsToHide: [],
        results: data
    })

    const setTable = (filterBy) => {
        setState((prev) => ({ ...prev, results: filterBy }))
    }

    const hardFilterFunc = () => {
        const hardFilter = filtered.filter((switchObj) =>
            filteredBySwitch.some((filteredObj) =>
                switchObj.title === filteredObj.title || switchObj.category === filteredObj.category))

        setTable(hardFilter)
    }

    useEffect(() => {
        (filteredBySwitch.length && search && filtered.length) ? hardFilterFunc() :

            (filtered.length || search) ?
                setTable(filtered) :
                (filteredBySwitch.length) ?
                    setTable(filteredBySwitch) : setTable(data)

        mapDynamicColumns()
    }, [filtered])

    const mapDynamicColumns = () => {
        let columns = []
        state.results.forEach((dataObjs) => {
            Object.keys(dataObjs).forEach((val) => {
                if (!columns.includes(val)) {
                    columns.push(val)
                }
            })
            setState((prev) => ({ ...prev, columns: columns }))
        })
    }

    const addTableRow = (result) => {
        let row = []
        state.columns.forEach((col) => {
            if (!state.columnsToHide.includes(col)) {
                row.push(
                    Object.keys(result).map((item) => {
                        if (result[item] && item === col) {
                            return result[item]
                        }
                        else if (item === col) {
                            return "no value"
                        }
                    })
                )
            }
        })
        return row.map((item, index) => {
            return (
                <td
                    key={`${item}--${index}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item}
                </td>
            );
        });
    }

    const mapTableColumns = () => {
        return state.columns.map((col) => {
            if (!state.columnsToHide.includes(col)) {
                const ColumnName = col
                return (
                    <th
                        key={col}
                        scope="col"
                        className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {ColumnName}
                    </th>
                );
            }
        });
    };

    const createTable = (results) => {
        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>{mapTableColumns()}</tr>
                </thead>
                <tbody>
                    {results.map((result) => {
                        return <tr key={result?.id}>{addTableRow(result)}</tr>;
                    })}
                </tbody>
            </table>
        );
    };

    return (
        <>
            <div className='table'>
                {createTable(state.results)}
            </div>
        </>
    )
}

export default DynamicTable