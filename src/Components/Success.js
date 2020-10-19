import { Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        textDecoration: "none",
        color: "#3f51b5",
        paddingTop: 100,
        textAlign: "center"
    },
}));

function ProductItem() {
    const classes = useStyles();
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe) return <h2 className={classes.title}>Please Purchase Something</h2>

    return (
        <Container maxWidth="xl" className={classes.title}>
            <h1>You have Successfully Purchased {shoe.name}</h1>
        </Container>
    )
}

export default ProductItem;