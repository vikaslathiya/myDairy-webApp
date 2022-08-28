import {Fragment} from "react";
import Counting from "../../../components/CompanyCounting/counts";
import {Grid} from "@material-ui/core";
import {useWelcomeStyle} from "./style";

const CustomerCounting = () => {
    const myStyle = useWelcomeStyle()

    const data = [
        {id: 'c1', title: "Total Products", counts: 9},
        {id: 'c2', title: "Happy Customer's", counts: 100},
        {id: 'c3', title: "Covered Cities", counts: 10000},
        {id: 'c4', title: "Countries", counts: 30},
    ]


    return (
        <Fragment>
            <Grid container id={'counting'} className={myStyle.counting}>
                    <Counting data={data}/>
            </Grid>
        </Fragment>
    )
}

export default CustomerCounting;