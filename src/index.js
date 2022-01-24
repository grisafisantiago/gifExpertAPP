import React from 'react';
import ReactDom from 'react-dom';
import { GifExpertAPP } from './components/GifExpertApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

require('./index.css');

const divRoot = document.querySelector('#root');

ReactDom.render(<GifExpertAPP />, divRoot);