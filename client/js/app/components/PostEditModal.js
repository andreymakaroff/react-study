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
        const {isOpenModal, onCloseModal, activePost, onUpdatePost} = this.props;

        return (
            <div>
                <Modal
                    visible={isOpenModal}
                    effect="fadeInUp"
                    onClickAway={onCloseModal}
                >
                    <PostForm
                      onUpdatePost={onUpdatePost}
                      activePost={activePost}
                    />
                    <button
                      className="button primary"
                      onClick={onCloseModal}
                    >
                        Close
                    </button>
                </Modal>
            </div>
        )
    }
}
