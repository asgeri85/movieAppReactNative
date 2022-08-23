import React from 'react';
import {View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';
import {units} from '../../../../utils/Units';
import Config from 'react-native-config';

const TrendFilmCard = ({onPress, film}) => {
  const filmUrl = `${Config.API_IMAGE}${film?.backdrop_path}`;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: filmUrl,
          }}
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
