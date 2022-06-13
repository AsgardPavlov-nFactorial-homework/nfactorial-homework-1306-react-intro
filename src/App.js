import * as React from "react";
import Header from './shared/Header';
import IndexPage from './pages/IndexPage';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <IndexPage />
        </div>
    );
}

export default App;
