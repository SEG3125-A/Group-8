import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// styled components
import styled from 'styled-components/native';
import { colors } from '../colors';
const { primary, secondary, accent } = colors;
import FriendsModal from '../Modals/FriendsModal';


const StyledView = styled.TouchableOpacity`
  background-color: ${primary};
  flex-direction: row;
  height: 45px;
  width: 45px; // Changed width to 45px
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
`;

const Friends = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StyledView onPress={showModal} style={props.imgContainerStyle}>
        <MaterialCommunityIcons name="account" size={35} color={accent} />
      </StyledView>
      <ProfileModal
        modalVisible={modalVisible}
        hideModal={hideModal}
      />
    </>
  );
};

export default Friends;
