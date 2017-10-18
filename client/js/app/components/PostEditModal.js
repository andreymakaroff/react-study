import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import PostForm from './PostForm';

export default class PostEditModal extends Component {

    static propTypes = {
        isOpenModal: PropTypes.bool,
        onCloseModal: PropTypes.func,
        activePost: PropTypes.object,
        onUpdatePost: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <Modal
                    visible={this.props.isOpenModal}
                    effect="fadeInUp"
                    onClickAway={this.props.onCloseModal}
                >
                    <PostForm onUpdatePost={this.props.onUpdatePost} activePost={this.props.activePost} />
                    <button className="button primary" onClick={this.props.onCloseModal}>Close</button>
                </Modal>
            </div>
        )
    }
}
