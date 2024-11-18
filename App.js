import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React,{ useEffect, useState } from 'react';
import MovieListView from './MovieListView';

export default function App() {
  const [movies, setMovies] = useState([]);

  function movieListHandler(movies) {
    setMovies(movies);
  }
  
  const getMovies = async() => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=es-ES';
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmJmNzhkNDg5ZGM1MDVlN2M1NmRlZTRkYTM3NTdkNiIsIm5iZiI6MTczMTU4ODA1MS45MjgxODQsInN1YiI6IjYzNTBlZTFkNGNhNjc2MDA3ZmUzMWVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x0ksYVFjPOCewZOman4ldxC0FxMn3dYYm-iRpedtSe0'
      }
    }
    fetch(url, options)
    .then(response => response.json())
    .then(response => movieListHandler(response))
    //.then(json =>  movieListHandler(json))
    .catch(err => console.error(err));
}

  useEffect(() => {
    getMovies()
  }, []);

  return (
    <View style={styles.container}>
      <MovieListView movies={movies}/>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
});
