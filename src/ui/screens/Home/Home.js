import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Logo from '../../../assets/logo.svg';
import SearchIcon from '../../../assets/search.svg';
import FilterIcon from '../../../assets/filter.svg';
import MenuIcon from '../../../assets/menu.svg';
import TrendFilmCard from '../../components/card/TrendFilmCard';
import {units} from '../../../utils/Units';
import FilmCard from '../../components/card/FilmCard';
import Slideshow from 'react-native-image-slider-show';
import useFetchFilm from '../../../hooks/useFetchFilm';

const Home = ({navigation}) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const images = [
    {url: 'http://placeimg.com/640/480/any'},
    {url: 'http://placeimg.com/640/480/any'},
    {url: 'http://placeimg.com/640/480/any'},
  ];

  const renderTrendFilm = ({item}) => (
    <TrendFilmCard onPress={() => onClickFilmCard(item)} />
  );

  const renderFilm = ({item}) => <FilmCard />;

  const onClickFilmCard = item => {
    navigation.navigate('DetailScreen');
  };

  const renderSliderItem = ({item}) => (
    <Image
      source={require('../../../assets/batman.jpg')}
      style={styles.sliderImage}
    />
  );

  return (
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
            data={DATA}
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
            data={DATA}
            renderItem={renderFilm}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{margin: 15, borderRadius: 12}}>
          <Slideshow dataSource={images} />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Last Updated</Text>
          <Text style={styles.seeAll}>See All ></Text>
        </View>
        <View style={{marginTop: 10}}>
          <FlatList
            data={DATA}
            renderItem={renderFilm}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Best Serires</Text>
          <Text style={styles.seeAll}>See All ></Text>
        </View>
        <View style={{marginVertical: 10}}>
          <FlatList
            data={DATA}
            renderItem={renderFilm}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#413E50',
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
