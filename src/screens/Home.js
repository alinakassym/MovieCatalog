import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getPopularMovies, getPopularTv, getUpcomingMovies} from '../services/services';
import Swiper from '../components/Swiper';
import List from '../components/List';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvs, setPopularTvs] = useState([]);
  const [moviesImages, setMoviesImages] = useState([]);
  useEffect(() => {
    getUpcomingMovies()
      .then(items => {
        const imgArr = [];
        items.forEach(item => {
          imgArr.push(`https://image.tmdb.org/t/p/w500${item.poster_path}`)
        })
        setMoviesImages(imgArr);
    });
    getPopularMovies()
      .then(res => {
        setPopularMovies(res);
      })
      .catch(err => {
        console.error(err);
      });
    getPopularTv()
      .then(res => {
        setPopularTvs(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);
  return (
    <React.Fragment>
      <Swiper images={moviesImages}/>
      <View style={styles.block}>
        <List title={'Popular Movies'} content={popularMovies} />
      </View>
      <View style={styles.block}>
        <List title={'Popular TV'} content={popularTvs} />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  block: {
    marginVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
  text: {
    fontSize: 18,
    color: '#000000'
  },
  error: {
    color: 'red'
  }
});

export default Home;
