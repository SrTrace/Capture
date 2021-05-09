import React from 'react';
//Import Pages
import AboutUs from "./pages/aboutUs";
//Global Style
import GlobalStyle from "./components/globalStyle";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <AboutUs/>
        </div>
    );
}

export default App;

