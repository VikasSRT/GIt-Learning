// withExtraProps is a function that accepts a component as parameter and returns a new Component with enhanced functionality

import { useEffect, useState } from "react"

// const withExtraProps = (WrappedComponent) => {
//     return (props) => (
//         <WrappedComponent {...props} extraProps="Hi I am WrapperComponent" />
//     )
// }

// export default withExtraProps

const withLoading = (WrappedComponent) => {

    return () => {
        const [loading, setLoading] = useState(true)
        let arrObj = [{ name: "tarun", rollNo: 24 }, {name: "manav", rollNo: 29}, {name: "abhishek", rollNo: 32}]

        useEffect(() => {
            setTimeout(() => {
                setLoading(false)
                console.log("rendering")
            }, 1000);
        }, [])

        return (
            <div>
                <WrappedComponent data={loading ? "Fetching name..." : arrObj} />
            </div>
        )
    }

}

export default withLoading