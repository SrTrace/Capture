import React from 'react';
//Import Pages
import AboutUs from "./pages/aboutUs";
//Global Style
import GlobalStyle from "./components/globalStyle";
import ContactUs from "./pages/contactUs";
import OurWork from "./pages/ourWork";
import Nav from "./components/nav";
import MovieDetail from "./pages/movieDetail";
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
//Animation
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <AboutUs/>
                    </Route>
                    <Route path="/work" exact>
                        <OurWork/>
                    </Route>
                    <Route path="/work/:id">
                        <MovieDetail/>
                    </Route>
                    <Route path="/contact">
                        <ContactUs/>
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;

