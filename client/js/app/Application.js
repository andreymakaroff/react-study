import React, { Component } from 'react';
import PostForm from './components/PostForm';
import Banner from './components/Banner';
import EditPostModal from './components/PostEditModal';
import Post from './components/Post';

export default class Application extends Component {

    state = {
        posts : {},
        isOpenedModal: false,
        activePost: null,
        activePostKey: null
    };

    constructor(props) {
        super(props);
    }

    addPost = (post) => {
        const {posts} = this.state;
        let timestamp = new Date().getTime();

        posts['post-' + timestamp] = post;
        this.setState({
            posts
        });
    };

    updatePost = (updatedPost) => {
        let {posts, activePostKey} = this.state;

        posts[activePostKey] = updatedPost;

        this.setState({
            isOpenedModal: false,
            activePost: null,
            activePostKey: null,
            posts
        });
    };

    handleDeletePost = (key) => {
        const {posts} = this.state;
        delete posts[key];

        this.setState({
            posts  //posts:posts
        });
    };

    handleEditPost = (key) => {
        const {posts} = this.state;
        const activePost = posts[key];

        this.setState({
            isOpenedModal: true,
            activePostKey: key,
            activePost
        });
    };

    handleCloseModal = () => {
        this.setState({
            isOpenedModal: false,
            activePost: null,
            activePostKey: null
        });
    };

    renderPost = (key) => {
        const postData = this.state.posts[key];

        return (
            <Post
                index={key}
                key={key}
                ptitle={postData.title}
                pimg={postData.image}
                postbody={postData.desc}
                author={postData.name}
                comments='0'
                enableDelete={true}
                enableEdit={true}
                onDelete={this.handleDeletePost}
                onEdit={this.handleEditPost}
            />
        )
    };

    render() {
        const imgOne = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Balaton_Hungary_Landscape.jpg/1024px-Balaton_Hungary_Landscape.jpg";
        const imgTwo ="https://c2.staticflickr.com/8/7432/9087815445_1a14743549_b.jpg";
        const imgThree ="https://c2.staticflickr.com/6/5738/23929500196_b6a1ce1dfb_b.jpg";
        const imgFour ="https://pixabay.com/static/uploads/photo/2015/09/14/19/15/aerial-landscape-939963_960_720.jpg";
        const dummyPost = "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.";
        const {posts, isOpenedModal, activePost} = this.state;

        return (
            <div>
                <Banner />
                <div className="row medium-8 large-7 columns">
                    <Post
                        ptitle="Flux flack"
                        pimg={imgOne} date="Nov 2, 2015"
                        postbody={dummyPost} author="Fred Armisen"
                        comments="2"
                        tags=""
                    />
                    <Post
                        ptitle="Inline Styles Aren't Necessary"
                        pimg={imgTwo}
                        postbody={dummyPost}
                        date="Aug 15, 2015"
                        author="Amy Schumer"
                        comments="5"
                    />
                    <Post
                        ptitle="Webpack and ES6"
                        pimg={imgThree}
                        date="Mar 9, 2015"
                        postbody={dummyPost}
                        author="Victoria Bell"
                        comments="3"
                    />
                    <Post
                        ptitle="No More Goobers"
                        pimg={imgFour}
                        date="Jan 11, 2015"
                        postbody={dummyPost}
                        author="Jack Sherlock"
                        comments="7"
                    />
                    <div className="list-of-posts">
                        {Object.keys(posts).map(this.renderPost)}
                    </div>
                    <PostForm addPost={this.addPost} />
                </div>
                <EditPostModal
                    onCloseModal={this.handleCloseModal}
                    isOpenModal={isOpenedModal}
                    activePost={activePost}
                    onUpdatePost={this.updatePost}
                />
            </div>
        )
    }

}
