import Config from 'react-native-config';
import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

const useFetchFilm = () => {
  const [trendFilmData, setTrendFilmData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getTrendFilmApi();
  }, []);

  const getTrendFilmApi = () => {
    console.log('burda');
    axios
      .get('https://fakestoreapi.com/products')
      .then(data => {
        console.log('girdi');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {getTrendFilmApi};
};

export default useFetchFilm;
