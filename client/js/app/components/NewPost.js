import React, { Component } from 'react';
import PropTypes from 'prop-types'
import h from './../utils/helper';

export default class NewPost extends Component {

    static propTypes = {
        details: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
    }

    render() {
        const {details} = this.props;

        return (
            <div className="blog-post">
                <h3
                    className="ptitle">
                    {details.title}
                    <small> {h.getTime()} </small>
                </h3>
                <img
                    className="thumbnail"
                    src={details.image}
                    alt={details.name}
                />
                <p>{details.desc}</p>
                <div className="callout callout-post">
                    <ul className="menu simple">
                        <li>
                            <a href="#">Author: {details.name}</a>
                        </li>
                        <li>
                            <a href="#">Comments: 0</a>
                        </li>
                        <li>
                            <a href="#">Tags: {h.getTaggedName()}</a>
                        </li>
                    </ul>
                    <button className="button warning">delete post</button>
                </div>
            </div>
        )
    }
}