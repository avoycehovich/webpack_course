import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
import WebpackLogo from './assets/webpack.png'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import './babel'
import React from 'react'
import {render} from 'react-dom'

const post = new Post('Webpack post title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

const App = () => (
    <div className="content">npm
        <h1>Webpack Course</h1>
        <hr/>
        <div className="logo"/>
        <hr/>
        <pre/>
        <hr/>

        <div className="box">
            <h2>LEss</h2>
        </div>

        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
);

render(<App/>, document.getElementById('app'));


// console.log('JSON:' + json);
// console.log('XML:' + xml);