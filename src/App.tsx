import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            Hello, samurai! Let's go!
            <Header />
            <Technologies />
            <Footer />
        </div>
    );
}

export default App;
