import React from 'react';
import {View, StyleSheet} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from 'react-native-modal';

const YoutubeModal = ({visible, cancel, id}) => {
  return (
    id && (
      <Modal
        isVisible={visible}
        onSwipeCancel={cancel}
        onBackButtonPress={cancel}
        onBackdropPress={cancel}>
        <View style={styles.container}>
          <YoutubePlayer height={200} videoId={id} />
        </View>
      </Modal>
    )
  );
};

export default YoutubeModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
