import {Fragment, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {Typography} from "@mui/material";
import CountUp from "react-countup";
import {useCountStyle} from "./style";

const Counting = (props) => {
    const {data} = props
    const myStyle = useCountStyle();
    const [showCount, setShowCount] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let element = document.querySelector('#counting');
            let position = element.getBoundingClientRect();

            // checking whether fully visible
            // if (position.top >= 0 && position.bottom <= window.innerHeight) {
            //     console.log('Element is fully visible in screen');
            // }

            // checking for partial visibility
            if (position.top < window.innerHeight && position.bottom >= 0 && !showCount) {
                setShowCount(true)
            }
        });
    }, [window])

    return (
        <Fragment>
            {data.map(obj => (
                <Grid item lg={3} md={3} sm={6} className={myStyle.countBox}>
                    <Typography component={'h2'} variant={'h2'} className={myStyle.title}>
                        {obj.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className={myStyle.count}>
                        {showCount && <CountUp
                            start={0}
                            end={
                                obj.counts || 0
                            }
                            duration={2}
                        />}
                        +
                    </Typography>
                </Grid>
            ))}

        </Fragment>
    )
}

export default Counting;