import React from 'react';
import { Text } from 'react-native';
import Modal from 'react-native-modal';
import { Card } from 'react-native-elements';

const ModalComponent = ({ isModalVisible, toggleModalPostType }) => {
    return (
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModalPostType}>
            <Card>
                <Text>Modal Showing</Text>
            </Card>
        </Modal>
    )
}

export default ModalComponent;