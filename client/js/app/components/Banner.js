import React, { Component } from 'react';
import Nav from './Nav';

const Banner = () => {
    return (
        <div>
            <Nav />
            <div className="big-banner">
                <div className="callout large primary">
                    <div className="row column text-center">
                        <h1>React Blog</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;


