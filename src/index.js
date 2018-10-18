import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import {createStore} from 'redux';
import reducers from './reducers';

let mainStore = createStore(reducers);

const renderfunc = () => {
    ReactDOM.render(<App mainStore={mainStore}/>, document.getElementById("root"));    
}

mainStore.subscribe(renderfunc);

renderfunc();


