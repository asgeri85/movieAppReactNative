import {useState, useEffect, useCallback} from 'react';
import {create} from 'apisauce';
import Config from 'react-native-config';

const useDetail = id => {
  const [filmDetailData, setFilmDetailData] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [videoId, setvideoId] = useState();
  const [popularFilms, setpopularFilms] = useState([]);

  const api = create({
    baseURL: Config.API_URL,
  });

  useEffect(() => {
    getDetailApi();
    getVideoDetail();
    getPopularData();
  }, [Config.API_KEY]);

  const getDetailApi = useCallback(async () => {
    try {
      const response = await api.get(`movie/${id}`, {
        api_key: Config.API_KEY,
      });
      if (response.ok) {
        setFilmDetailData(response.data);
        setloading(false);
      }
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  }, [id]);

  const getVideoDetail = useCallback(async () => {
    try {
      const response = await api.get(`movie/${id}/videos`, {
        api_key: Config.API_KEY,
      });
      if (response.ok) {
        setvideoId(response.data.results[0].key);
        setloading(false);
      }
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  }, [id]);

  const getPopularData = useCallback(async () => {
    try {
      const response = await api.get('movie/popular', {
        api_key: Config.API_KEY,
      });
      if (response.ok) {
        const responseData = response.data.results.slice(0, 10);
        setpopularFilms(responseData);
      }
    } catch (err) {
      seterror(err.message);
    }
  }, [Config.API_KEY]);

  return {filmDetailData, loading, error, videoId, popularFilms};
};

export default useDetail;
