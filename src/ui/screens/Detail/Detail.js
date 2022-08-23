import React, {useState} from 'react';
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
import useDetail from '../../../hooks/useDetail';
import YoutubeModal from '../../components/modal/YoutubeModal';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import {useDispatch} from 'react-redux';

const Detail = ({route, navigation}) => {
  const {id} = route.params;
  const {filmDetailData, loading, error, videoId, popularFilms} = useDetail(id);
  const [isModalVisible, setModalVisible] = useState(false);

  const filmUrl = `${Config.API_IMAGE}${filmDetailData?.backdrop_path}`;
  const filmPhoto = `${Config.API_IMAGE}${filmDetailData?.poster_path}`;

  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderFilm = ({item}) => <FilmCard film={item} />;

  const navigateIconClick = () => {
    navigation.goBack();
  };

  const onClickSave = () => {
    dispatch({type: 'ADD_FILM', payload: {film: filmDetailData}});
  };

  function timeConvert(n) {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + ' hour ' + rminutes + ' minute(s)';
  }

  if (loading) {
    return <Loading />;
  }

  return (
    filmDetailData && (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image source={{uri: filmUrl}} style={styles.image} />
            <View style={styles.toolBarContainer}>
              <TouchableOpacity onPress={navigateIconClick}>
                <NavigationIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={onClickSave}>
                <BookmarkIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.filmTitle} numberOfLines={2}>
                {filmDetailData?.original_title}
              </Text>
              <Text style={styles.filmSubTitle}>
                {timeConvert(filmDetailData?.runtime)}
              </Text>
              <Text>Action</Text>
              <View style={styles.imdbContainer}>
                <StarIcon />
                <Text style={styles.textImdb}>
                  {filmDetailData?.vote_average}/ 10 from IMDb
                </Text>
              </View>
              <CustomButton />
            </View>
            <Image
              source={{uri: filmPhoto}}
              style={styles.coverPhoto}
              resizeMode="stretch"
            />
          </View>
          <YoutubeModal
            cancel={toggleModal}
            visible={isModalVisible}
            id={videoId}
          />
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>About</Text>
            <Text style={styles.detailText}>{filmDetailData?.overview}</Text>
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.aboutTitle}>Trailer</Text>
            <View>
              <Image source={{uri: filmUrl}} style={styles.trailerVideo} />
              <TouchableOpacity style={styles.play} onPress={toggleModal}>
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
              data={popularFilms}
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

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1A29',
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
    width: units.width / 2,
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
