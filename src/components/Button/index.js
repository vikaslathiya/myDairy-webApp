import {Fragment} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const CustomButton = (props) => {
    const {variant, buttonType, buttonText, onclick, fullWidth} = props

    const useBtnStyle = makeStyles((theme) => ({
        btn: {
            textTransform: "capitalize",
            fontWeight: 600,
        }
    }))
    const myStyle = useBtnStyle();

    return (
        <Fragment>
            <Button type={buttonType} fullWidth={fullWidth} onClick={onclick} color="primary" variant={variant} className={myStyle.btn}>
                {buttonText}
            </Button>
        </Fragment>
    )
}

export default CustomButton;