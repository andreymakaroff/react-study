import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

import AddPostForm from './AddPostForm';

export default class PostEditModal extends Component {

    state = {
        visible: false
    };

    constructor(props) {
        super(props)
    };

    openModal = () => {
        this.setState({visible: true});
    };

    closeModal = () => {
        this.setState({visible: false});
    };


    render() {
        return (
            <div>
                <Modal
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal}
                >
                    <AddPostForm />
                    <button onClick={this.closeModal}>Close</button>
                </Modal>
            </div>
        )
    }
}
