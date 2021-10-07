import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import Swiper from "../components/Swiper";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
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
    });
    getPopularMovies()
      .then(res => {
        setPopularMovies(res);
      })
      .catch(err => {
        setError(err);
      })
  }, []);
  return (
    <View style={styles.block}>
      <Swiper images={moviesImages}/>

      <Text>Popular Movies</Text>
      <FlatList horizontal={true} data={popularMovies} renderItem={({item}) => <Text>{item.title}</Text>}>
      </FlatList>
      <Text style={styles.text}>Movie Name: {popularMovies.original_title}</Text>
      <Text style={styles.text}>Language: {popularMovies.original_language}</Text>
      <Text style={styles.text}>Release date: {popularMovies.release_date}</Text>
      {error && <Text style={styles.error}>Something went wrong</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default Home;
