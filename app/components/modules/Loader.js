import React from 'react'
import { LineWave } from 'react-loader-spinner'

function Loader() {
    return (
        <>
            <LineWave
                visible={true}
                height="100"
                width="100"
                color="#fff"
                ariaLabel="line-wave-loading"
                wrapperClass=""

            />

        </>
    )
}

export default Loader