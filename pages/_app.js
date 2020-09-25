import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";

const MyApp = ({Component, pageProps}) =>
  <>
    <Logo />
    <Navigation/>

    <Component {...pageProps} />
  </>;

export default MyApp;
