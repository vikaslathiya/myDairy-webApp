import React, {Fragment} from "react";
import loader from "../../Asset/loader.gif"
import './style.css'

const LoadingSpin = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='noData'>
                    <img src={loader} alt={'loading...'}/>
                </div>
            </div>

        </Fragment>
    )
}

export default LoadingSpin;