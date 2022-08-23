import Config from 'react-native-config';
import {useCallback, useEffect, useState} from 'react';
import {create} from 'apisauce';

const useFetchFilm = () => {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularFilms, setPopularFilms] = useState([]);
  const [topRatedFilms, setTopRatesFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const api = create({
    baseURL: Config.API_URL,
  });

  useEffect(() => {
    getNowPlaying();
    getPopularData();
    getTopRatedData();
  }, [Config.API_KEY]);

  const getNowPlaying = useCallback(async () => {
    try {
      const response = await api.get('movie/now_playing', {
        api_key: Config.API_KEY,
      });
      if (response.ok) {
        const responseData = response.data.results.slice(0, 8);
        setNowPlayingData(responseData);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [Config.API_KEY]);

  const getPopularData = useCallback(async () => {
    try {
      const response = await api.get('movie/popular', {
        api_key: Config.API_KEY,
      });
      if (response.ok) {
        const responseData = response.data.results.slice(0, 10);
        setPopularFilms(responseData);
      }
    } catch (err) {
      setError(err.message);
    }
  }, [Config.API_KEY]);

  const getTopRatedData = useCallback(async () => {
    try {
      const response = await api.get('movie/top_rated', {
        api_key: Config.API_KEY,
      });
      if (response.ok) {
        const responseData = response.data.results.slice(0, 10);
        setTopRatesFilms(responseData);
      }
    } catch (err) {
      setError(err.message);
    }
  }, [Config.API_KEY]);

  return {nowPlayingData, loading, error, popularFilms, topRatedFilms};
};

export default useFetchFilm;
