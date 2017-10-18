import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';
import PostForm from './PostForm';

const PostEditModal = (props) => {
    const {isOpenModal, onUpdatePost, activePost, onCloseModal} = props;

    return(
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
};

PostEditModal.propTypes = {
  isOpenModal: PropTypes.bool,
  onCloseModal: PropTypes.func,
  activePost: PropTypes.object,
  onUpdatePost: PropTypes.func.isRequired
};

export default PostEditModal;