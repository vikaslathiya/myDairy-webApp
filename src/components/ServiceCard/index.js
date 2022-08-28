import {Fragment} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useServiceCardStyle} from "./style";

const ServiceCard = (props) => {
    const {image, cardTitle, cardDescription} = props;
    const myStyle = useServiceCardStyle()
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <Card className={myStyle.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={myStyle.cardMedia}
                            image={image}
                            alt={cardTitle}
                        />
                        {cardTitle && cardDescription && <CardContent className={myStyle.cardContent}>
                            <Typography gutterBottom variant="h5" component="div">
                                {cardTitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cardDescription}
                            </Typography>
                        </CardContent>}
                    </CardActionArea>
                </Card>
            </Grid>
        </Fragment>
    )
}

export default ServiceCard;