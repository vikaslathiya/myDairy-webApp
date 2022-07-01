import React, {Fragment} from "react";
import noData from "../../Asset/empty_box.png"
import './style.css'

const NoData = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='noData'>
                    <img src={noData} alt={'No Data Found'}/>
                    <h2>No Data Found!</h2>
                </div>
            </div>

        </Fragment>
    )
}

export default NoData;