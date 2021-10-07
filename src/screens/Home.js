import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import Swiper from "../components/Swiper";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [moviesImages, setMoviesImages] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getUpcomingMovies()
      .then(items => {
        const imgArr = [];
        items.forEach(item => {
          imgArr.push(`https://image.tmdb.org/t/p/w500${item.poster_path}`)
        })
        setMoviesImages(imgArr);
        console.log('moviesImages', moviesImages);
    });
    getPopularMovies()
      .then(res => {
        setMovies(res[0]);
      })
      .catch(err => {
        setError(err);
      })
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <Swiper images={moviesImages}/>
        <Text style={styles.text}>Movie Name: {movies.original_title}</Text>
        <Text style={styles.text}>Language: {movies.original_language}</Text>
        <Text style={styles.text}>Release date: {movies.release_date}</Text>
        {error && <Text style={styles.error}>Something went wrong</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  block: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: '#000000'
  },
  error: {
    color: 'red'
  },
  img: {
    width: '50%',
    height: 300,
  }
});

export default Home;
