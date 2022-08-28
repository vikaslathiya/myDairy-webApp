import {Fragment} from "react";
import {Box, Typography} from "@mui/material";
import {useFooterStyle} from "./style";

const Footer = () => {
    const myStyle = useFooterStyle()
    return (
        <Fragment>
            <Box component={'div'} className={myStyle.footerBox}>
                <Typography variant={'h6'} component={'h6'}>
                    Copy Right &#169; 2022 | All Rights Reserved!
                </Typography>
            </Box>
        </Fragment>
    )
}

export default Footer;