import React from 'react';
import {View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';
import {units} from '../../../../utils/Units';

const TrendFilmCard = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/batman.jpg')}
          style={styles.image}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TrendFilmCard;

const styles = StyleSheet.create({
  image: {
    width: units.width / 1.4,
    height: units.height / 3.5,
    borderRadius: 12,
  },
  container: {
    marginHorizontal: 8,
  },
});
