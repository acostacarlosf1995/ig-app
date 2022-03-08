import React from "react";
import ReactDom from "react-dom";
import Main from './components/Main'
import { BrowserRouter } from "react-router-dom";

import '../src/styles/stylesheets.css'

ReactDom.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));