import { Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 0,
        textAlign: 'center',
        color: "#3f51b5",
        width: "fit-content",
        margin: "0 auto",
    },
    title: {
        textDecoration: "none",
        color: "#3f51b5",
    },
}));

function ProductItem() {
    const classes = useStyles();
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe) return <h2 className={classes.title}>Item Not Found</h2>

    return (
        <Container maxWidth="xl" style={{ textAlign: "center" }} className={classes.title}>
            <h1>{shoe.name}</h1>
            <Paper className={classes.paper} elevation={5}>
            <img src={shoe.img} alt={shoe.name} width={400} />
            </Paper>
            <h2>Price: {shoe.price} &nbsp;
                <Button variant="contained" color="primary" component={Link} to={`/success/${id}`}>
                    Order Now
                </Button>
            </h2>
        </Container>
    )
}

export default ProductItem;