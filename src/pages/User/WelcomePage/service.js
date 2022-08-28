import {Fragment} from "react";
import {Grid, Typography} from "@mui/material";
import {useWelcomeStyle} from "./style";
import ServiceCard from "../../../components/ServiceCard";
import delivery from '../../../Asset/img.png'
import testing from '../../../Asset/chemistry.png'
import temperature from '../../../Asset/thermometer.png'
import doorStep from '../../../Asset/doorStep.png'
import orderList from '../../../Asset/orderlist.png'
import testingKit from '../../../Asset/testing-kit.png'

const ServiceSection = () => {
    const myStyle = useWelcomeStyle()
    return (
        <Fragment>
            <Grid item sm={12} md={12} lg={12} className={myStyle.services}>
                <Typography component={'h2'} variant={'h2'}>
                    Our Services
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    We make sure every product you get has been fully tested for purity and freshness.
                </Typography>

                <Grid container sm={12} md={12} lg={12}>
                    <ServiceCard
                        image={delivery}
                        cardTitle={'Milking Twice a Day'}
                        cardDescription={'Fresh Milk reaches your doorstep within 24-48 hours'}
                    />
                    <ServiceCard
                        image={testing}
                        cardTitle={'26 Tests Everyday'}
                        cardDescription={'Scientific quality testing of milk for adulteration at every stage'}/>
                    <ServiceCard
                        image={temperature}
                        cardTitle={'Pasteurization & Packing at 3°C'}
                        cardDescription={'Maintaining milk at 3°C improves shelf life prevents increase in bacteria counts'}/>
                    <ServiceCard
                        image={doorStep}
                        cardTitle={'Doorstep Delivery Everyday'}
                        cardDescription={'Fresh Milk promise with added convenience of home delivery everyday'}/>
                    <ServiceCard
                        image={orderList}
                        cardTitle={'Hassle Free Management'}
                        cardDescription={'Easy to use Mobile App for managing your daily orders'}/>
                    <ServiceCard
                        image={testingKit}
                        cardTitle={'Self Test Kit'}
                        cardDescription={'Get a complimentary test kit free with your trial order'}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default ServiceSection;