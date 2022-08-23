import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <Lottie
      source={require('../../../assets/loadinganim.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
