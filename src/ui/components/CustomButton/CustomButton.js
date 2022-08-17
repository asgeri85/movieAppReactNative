import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Watch Now</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E82626',
    borderRadius: 8,
    paddingHorizontal: 25,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'baseline',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontWeight: '600',
  },
});
