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
import {Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Switch>
                <Route path="/" exact>
                    <AboutUs/>
                </Route>
                <Route path="/work" exact>
                    <OurWork/>
                </Route>
                <Route path="/work/:id">
                    <MovieDetail/>
                </Route>
                <Route  path="/contact">
                    <ContactUs/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

