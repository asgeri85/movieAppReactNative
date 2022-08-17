import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {units} from '../../../utils/Units';
import NavigationIcon from '../../../assets/navigation.svg';
import BookmarkIcon from '../../../assets/bookmark.svg';
import StarIcon from '../../../assets/star.svg';
import PlayIcon from '../../../assets/play.svg';
import CustomButton from '../../components/CustomButton';
import FilmCard from '../../components/card/FilmCard';
import useFetchFilm from '../../../hooks/useFetchFilm';
import axios from 'axios';

const Detail = () => {
  //const {getTrendFilmApi} = useFetchFilm();

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

  const renderFilm = ({item}) => <FilmCard />;

  const getir = async () => {
    console.log('***');
    try {
      // const istek = fetch('https://fakestoreapi.com/products');

      //const api = await fetch('https://sozluk.gov.tr/icerik');

      const {data: reponse} = await axios.get('https://sozluk.gov.tr/icerik');
      console.log(reponse);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require('../../../assets/batman.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.toolBarContainer}>
            <TouchableOpacity>
              <NavigationIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <BookmarkIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.filmTitle}>Batman</Text>
            <Text style={styles.filmSubTitle}>1 hour 39 minute(s)</Text>
            <Text>Action</Text>
            <View style={styles.imdbContainer}>
              <StarIcon />
              <Text style={styles.textImdb}>8.9 / 10 from IMDb</Text>
            </View>
            <CustomButton />
          </View>
          <Image
            source={require('../../../assets/batman.jpg')}
            style={styles.coverPhoto}
            resizeMode="cover"
          />
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.detailText}>
            The Asgardian Loki encounters the Other, the leader of an
            extraterrestrial race known as the Chitauri. In exchange for
            retrieving the Tesseract...
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.aboutTitle}>Trailer</Text>
          <View>
            <Image
              source={require('../../../assets/batman.jpg')}
              style={styles.trailerVideo}
            />
            <TouchableOpacity style={styles.play} onPress={getir}>
              <PlayIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>More Like This</Text>
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

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#413E50',
    flex: 1,
  },
  image: {
    height: units.height / 2.3,
    width: '100%',
    opacity: 0.4,
    backgroundColor: 'black',
  },
  toolBarContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 0,
    left: 0,
    marginHorizontal: 16,
    marginTop: units.height / 30,
  },
  imdbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    bottom: -10,
    left: units.width / 19,
  },
  filmTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  filmSubTitle: {
    color: '#DEDDDF',
    fontWeight: '400',
    fontSize: 13,
    marginTop: 5,
  },
  textImdb: {
    color: '#777777',
    fontWeight: '400',
    fontSize: 13,
    marginLeft: 5,
  },
  coverPhoto: {
    position: 'absolute',
    height: units.height / 4.6,
    width: units.width / 2.6,
    borderRadius: 12,
    bottom: -10,
    right: 16,
  },
  aboutContainer: {
    margin: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#DEDDDF',
  },
  detailText: {
    fontSize: 13,
    color: '#DEDDDF',
    fontWeight: '400',
    marginTop: 8,
  },
  trailerVideo: {
    width: '100%',
    height: units.height / 4.9,
    borderRadius: 12,
    marginTop: 10,
  },
  play: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    top: units.height / 15.8,
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
});
