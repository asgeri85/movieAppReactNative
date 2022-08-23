import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import FavoriteCard from '../../components/card/FavoriteCard';
import SwipeableFlatList from 'react-native-swipeable-list';
import {units} from '../../../utils/Units';
import {useDispatch} from 'react-redux';

const Favorites = () => {
  const movies = useSelector(selector => selector.filmList);
  const dispatch = useDispatch();

  const renderItem = ({item}) => <FavoriteCard film={item} />;

  const removeFilm = id => {
    dispatch({type: 'REMOVE_FILM', payload: {id}});
  };

  const swipeItem = (index, item) => {
    return (
      <View style={styles.swipeContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => removeFilm(item.id)}>
          <Text style={styles.buttonTitle}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <SwipeableFlatList
        data={movies}
        renderItem={renderItem}
        maxSwipeDistance={110}
        renderQuickActions={({index, item}) => swipeItem(index, item)}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1A29',
    flex: 1,
    paddingVertical: units.height / 78,
    paddingHorizontal: units.width / 78,
  },
  swipeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginEnd: units.width / 30,
  },
  contentContainerStyle: {
    marginTop: 5,
    flexGrow: 1,
  },
  buttonContainer: {
    backgroundColor: '#E82626',
    padding: units.width / 26,
    borderRadius: 8,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginStart: 10,
  },
});
