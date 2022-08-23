import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import {units} from '../../../../utils/Units';
import StarIcon from '../../../../assets/star.svg';
import Config from 'react-native-config';

const FavoriteCard = ({film}) => {
  const filmPhoto = `${Config.API_IMAGE}${film?.poster_path}`;

  function timeConvert(n) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + ' hour ' + rminutes + ' minute(s)';
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          source={{uri: filmPhoto}}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{film.original_title}</Text>
          <Text style={styles.filmLength}>{timeConvert(film.runtime)}</Text>
          <View style={styles.imdbContainer}>
            <StarIcon />
            <Text style={styles.textImdb}>
              {film.vote_average} / 10 from IMDb
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  image: {
    height: units.height / 5,
    width: units.width / 3,
    borderRadius: 12,
    margin: 5,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#242135',
    borderRadius: 8,
    margin: 5,
  },
  titleContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    color: '#DEDDDF',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: units.height / 78,
  },
  filmLength: {
    color: '#DEDDDF',
    fontSize: 15,
    fontWeight: '400',
    marginVertical: units.height / 78,
  },
  imdbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: units.height / 78,
  },
  textImdb: {
    color: '#777777',
    fontWeight: '400',
    fontSize: 14,
    marginLeft: 5,
  },
});
