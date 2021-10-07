import React from 'react';
import Carousel from 'pinar';
import {
  Image,
  StyleSheet,
} from 'react-native';

const Swiper = ({images}) => {
  return (
    <Carousel>
      {images.map((img, i) => (
        <Image style={styles.slide1} key={i} source={{uri: img}} />
      ))}

    </Carousel>
  )
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    maxWidth: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297"
  },
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold"
  }
});

export default Swiper;
