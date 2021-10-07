import React from 'react';
import Carousel from 'pinar';
import {
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

const dimensions = Dimensions.get('screen')
const Swiper = ({images}) => {
  return (
    <Carousel showsDots={false} loop={true} height={dimensions.height / 1.5}>
      {images.map((img, i) => (
        <Image style={styles.slide} key={i} source={{uri: img}} />
      ))}
    </Carousel>
  )
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8"
  },
});

export default Swiper;
