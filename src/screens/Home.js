import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getFamilyMovies, getPopularMovies, getPopularTv, getUpcomingMovies} from '../services/services';
import Swiper from '../components/Swiper';
import List from '../components/List';

const getData = () => {
  return Promise.all([
    getUpcomingMovies(),
    getPopularMovies(),
    getPopularTv(),
    getFamilyMovies()
  ])
};

const Home = () => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTvs, setPopularTvs] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  useEffect(() => {
    getData()
      .then(([moviesImagesData, popularMoviesData, popularTvsData, familyMoviesData]) => {
        const imgArr = [];
        moviesImagesData.forEach(item => {
          imgArr.push(`https://image.tmdb.org/t/p/w500${item.poster_path}`)
        })
        setMoviesImages(imgArr);
        setPopularMovies(popularMoviesData);
        setPopularTvs(popularTvsData);
        setFamilyMovies(familyMoviesData);
    })
      .catch(err =>{
        console.error(err)
      });
  }, []);
  return (
    <React.Fragment>
      {moviesImages && (<Swiper images={moviesImages}/>)}
      {popularMovies && (
        <View style={styles.block}>
          <List title={'Popular Movies'} content={popularMovies}/>
        </View>
      )}
      {popularTvs && (
        <View style={styles.block}>
          <List title={'Popular TV Shows'} content={popularTvs} />
        </View>
      )}
      {familyMovies && (
        <View style={styles.block}>
          <List title={'Family Movies'} content={familyMovies} />
        </View>
      )}
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
