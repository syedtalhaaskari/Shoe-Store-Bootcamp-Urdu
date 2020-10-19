import React from "react";
import Shoes from "../shoes.json";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#3f51b5",
  },
  title: {
    textDecoration: "none",
  },
}));

function Product() {

    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
            {Object.keys(Shoes).map(prd => {
                const shoe = Shoes[prd];
                return (
                <Grid component={Link} to={`/product/${prd}`} item xs={12} sm={6} md={4} key={prd} className={classes.title}>
                    <Paper className={classes.paper} elevation={3}>
                        <h3>{shoe.name}</h3>
                        <img src={shoe.img} alt={shoe.name} height={150} />
                        <h4>Price: {shoe.price}</h4>
                    </Paper>
                </Grid>
                )
            })}
            </Grid>
        </Container>
    )
}

export default Product;