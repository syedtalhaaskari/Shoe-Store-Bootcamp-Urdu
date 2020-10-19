import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";
import NavBar from "./Components/NavBar";
import Success from "./Components/Success";

function Routes() {
    return (
        <div>
          <Router>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/product" component={Product} />
              <Route path="/product/:id" component={ProductItem} />
              <Route path="/success/:id" component={Success} />
              <Route path="*" component={() => <h1>Page Not Found</h1>} />
            </Switch>
          </Router>
        </div>
    )
}

export default Routes;