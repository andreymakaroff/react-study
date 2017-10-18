import React, { Component } from 'react';
import PropTypes from 'prop-types';
import h from './../utils/helper';

export default class Post extends Component {

    static propTypes = {
        ptitle: PropTypes.string.isRequired,
        pimg: PropTypes.string.isRequired,
        postbody: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        comments: PropTypes.string.isRequired,
        enableDelete: PropTypes.bool,
        onDelete: PropTypes.func,
        index: PropTypes.string,
        enableEdit: PropTypes.bool,
        onEdit: PropTypes.func,

    };

    static defaultProps = {
        enableDelete: false,
        enableEdit: false
    };

    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.index);
    };

    handleEdit = () => {
        this.props.onEdit(this.props.index);
    };

    render() {
        const com = "Comments";
        const {ptitle, pimg, postbody, author, comments, enableDelete, enableEdit, date} = this.props;

        return (
            <div className="blog-post">
                {
                    enableEdit &&
                    <button className="button primary" onClick={this.handleEdit}>edit post</button>
                }
                <h3 className="ptitle">
                    {ptitle}
                    <small>{date}</small>
                </h3>
                <img className="thumbnail" src={pimg} />
                <p>{postbody}</p>
                <div className="callout callout-post">
                    <ul className="menu simple">
                        <li>
                            <a href="#">Author: {author}</a>
                        </li>
                        <li>
                            <a href="#">{com}: {comments}</a>
                        </li>
                        <li>
                            <a href="#">Tags: {h.getTaggedName()}</a>
                        </li>
                    </ul>
                    {
                        enableDelete &&
                        <button className="button warning" onClick={this.handleDelete}>delete post</button>
                    }
                </div>
            </div>
        )
    }

}
