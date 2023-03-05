import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Payment from "./pages/Payment";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/payment/:price" component={Payment} />
      <Route exact path="/profile/edit" component={EditProfile} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Login} />
      <Route path="/cart" component={Cart} />
      <Route path="/store" component={Store} />
    </Switch>
  );
};

export default Content;
