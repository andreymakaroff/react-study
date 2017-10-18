import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
    title: '',
    name: '',
    desc: '',
    image: ''
};

export default class PostForm extends Component {

    state = initialState;

    static propTypes = {
        activePost: PropTypes.object,
        addPost: PropTypes.func,
        onUpdatePost: PropTypes.func
    };

    static defaultProps = {
        activePost: null
    };

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.activePost) {
            this.setState(nextProps.activePost);
        }
    };

    handlePost = (event) => {
        event.preventDefault();

        const {activePost, addPost, onUpdatePost} = this.props;
        const post = {
            title : this.state.title,
            name : this.state.name,
            desc : this.state.desc,
            image : this.state.image
        };

        (activePost) ? onUpdatePost(post) : addPost(post);

        this.setState(initialState);
    };

    handleChangeInput = (field) => (event) => {
        const value = event.target.value;

        this.setState({
            [field]: value
        });
    };

    render() {
        const{title, name, desc, image} = this.state;

        return (
            <div className="callout secondary form-area">
                <h5>Add a Post to the React Blog</h5>
                <form className="post-edit" onSubmit={this.handlePost}>
                    <label>Post Title
                        <input
                            type="text"
                            value={title}
                            placeholder="Post Title"
                            onChange={this.handleChangeInput('title')}
                            required
                        />
                    </label>
                    <label>Author Name
                        <input
                            type="text"
                            value={name}
                            placeholder="Full Name required"
                            onChange={this.handleChangeInput('name')}
                            required
                        />
                    </label>
                    <label>Post Body
                        <textarea
                            value={desc}
                            placeholder="Write your post here"
                            onChange={this.handleChangeInput('desc')}
                            required
                        />
                    </label>
                    <label>Image URL - <span className="highlight">use this one to test 'https://bit.ly/1P9prpc'</span>
                        <input
                            value={image}
                            type="url"
                            placeholder="The URL of the featured image for your post"
                            onChange={this.handleChangeInput('image')}
                            required
                        />
                    </label>
                    <button type="submit" className="button">
                        {this.props.activePost ? 'Update post' : 'Add post'}
                    </button>
                </form>
            </div>
        )
    }

}