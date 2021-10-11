import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, ActivityIndicator} from 'react-native';
import {getFamilyMovies, getPopularMovies, getPopularTv, getUpcomingMovies} from '../services/services';
import Swiper from '../components/Swiper';
import List from '../components/List';
import Error from '../components/Error';

const getData = () => {
  return Promise.all([
    getUpcomingMovies(),
    getPopularMovies(),
    getPopularTv(),
    getFamilyMovies()
  ])
};

const Home = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTvs, setPopularTvs] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
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
        setLoaded(true);
    })
      .catch(err =>{
        setError(err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);
  return (
    <React.Fragment>
      {loaded && !error && (<ScrollView>
        {/*Upcoming Movies*/}
        {moviesImages && (<Swiper images={moviesImages}/>)}

        {/*Popular Movies*/}
        {popularMovies && (
          <View style={styles.block}>
            <List navigation={navigation} title={'Popular Movies'} content={popularMovies}/>
          </View>
        )}

        {/*Popular TV Shows*/}
        {popularTvs && (
          <View style={styles.block}>
            <List navigation={navigation} title={'Popular TV Shows'} content={popularTvs} />
          </View>
        )}

        {/*Family Movies*/}
        {familyMovies && (
          <View style={styles.block}>
            <List navigation={navigation} title={'Family Movies'} content={familyMovies} />
          </View>
        )}
      </ScrollView>)}
      {!loaded && (<ActivityIndicator size={'large'}/>)}
      {error && (<Error />)}
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
