import React, { useState } from 'react';
import { Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// styled components
import styled from 'styled-components/native';
import { colors } from '../colors';
const { primary, secondary } = colors;
import BigText from '../Texts/BigText';

import { ModalView, ModalPressableContainer } from './MessageModal';
const StyledView = styled.View`
  background-color: ${primary};
  flex-direction: column;
  height: 65px;
  width: 65px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${secondary};
`;

// Mock list of friends
const friends = [
  { name: 'Friend 1', online: true },
  { name: 'Friend 2', online: false },
  // add more friends here
];

const FriendsModal = ({ modalVisible, hideModal }) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <ModalPressableContainer onPress={hideModal}>
        <ModalView>
          <StyledView>
            <MaterialCommunityIcons name="account" size={55} color={accent} />
          </StyledView>

          <FlatList
            data={friends}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <BigText style={{ color: item.online ? 'green' : 'red' }}>
                {item.name} - {item.online ? 'Online' : 'Offline'}
              </BigText>
            )}
          />
        </ModalView>
      </ModalPressableContainer>
    </Modal>
  );
};

export default FriendsModal;
