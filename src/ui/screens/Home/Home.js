import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Logo from '../../../assets/logo.svg';
import SearchIcon from '../../../assets/search.svg';
import FilterIcon from '../../../assets/filter.svg';
import MenuIcon from '../../../assets/menu.svg';
import TrendFilmCard from '../../components/card/TrendFilmCard';
import {units} from '../../../utils/Units';
import FilmCard from '../../components/card/FilmCard';
import Slideshow from 'react-native-image-slider-show';
import useFetchFilm from '../../../hooks/useFetchFilm';
import Config from 'react-native-config';
import Loading from '../../components/Loading';

const Home = ({navigation}) => {
  const {nowPlayingData, loading, error, popularFilms, topRatedFilms} =
    useFetchFilm();

  const yeniDizi = nowPlayingData.map(item => {
    return {url: `${Config.API_IMAGE}${item?.backdrop_path}`};
  });

  const imageUrl = yeniDizi ? yeniDizi.slice(0, 4) : [];

  const renderTrendFilm = ({item}) => (
    <TrendFilmCard onPress={() => onClickFilmCard(item.id)} film={item} />
  );

  const renderFilm = ({item}) => (
    <FilmCard film={item} onPress={() => onClickFilmCard(item.id)} />
  );

  const onClickFilmCard = id => {
    navigation.navigate('DetailScreen', {id});
  };

  if (loading) {
    return <Loading />;
  }

  return (
    nowPlayingData && (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.toolbarContainer}>
            <Logo />
            <View style={styles.iconContainer}>
              <SearchIcon style={styles.icon} />
              <FilterIcon style={styles.icon} />
              <MenuIcon style={styles.icon} />
            </View>
          </View>
          <View style={styles.trendContainer}>
            <FlatList
              data={nowPlayingData}
              renderItem={renderTrendFilm}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Most Popular</Text>
            <Text style={styles.seeAll}>See All ></Text>
          </View>
          <View style={{marginTop: 10}}>
            <FlatList
              data={popularFilms}
              renderItem={renderFilm}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
          <View style={{margin: 15}}>
            <Slideshow dataSource={imageUrl} />
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Last Updated</Text>
            <Text style={styles.seeAll}>See All ></Text>
          </View>
          <View style={{marginVertical: 10}}>
            <FlatList
              data={topRatedFilms}
              renderItem={renderFilm}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    )
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1A29',
    flex: 1,
  },
  toolbarContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
  trendContainer: {
    width: '100%',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#DEDDDF',
  },
  categoryContainer: {
    marginTop: units.height / 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  seeAll: {
    color: '#777777',
    fontWeight: '400',
  },
  slider: {
    borderWidth: 2,
    borderRadius: 20,
  },
});
