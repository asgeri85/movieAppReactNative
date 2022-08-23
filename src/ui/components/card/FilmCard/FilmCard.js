import React from 'react';
import {TouchableWithoutFeedback, Image, View, StyleSheet} from 'react-native';
import {units} from '../../../../utils/Units';

const FilmCard = ({film, onPress}) => {
  const filmUrl = `https://image.tmdb.org/t/p/w500${film?.poster_path}`;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: filmUrl}} style={styles.image} />
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
