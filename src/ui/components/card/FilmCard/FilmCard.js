import React from 'react';
import {TouchableWithoutFeedback, Image, View, StyleSheet} from 'react-native';
import {units} from '../../../../utils/Units';

const FilmCard = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/batman.jpg')}
          style={styles.image}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FilmCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
  },
  image: {
    height: units.height / 3.8,
    width: units.width / 2.6,
    borderRadius: 12,
  },
});
