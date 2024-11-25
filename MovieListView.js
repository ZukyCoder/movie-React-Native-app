import {StyleSheet,View, Text, ScrollView} from 'react-native';
import React,{useState} from 'react';
import MovieScene from './components/MovieScene';

function MovieListView(props) {
const movieData = require('./testMovies.json');
const movieImage = require('./assets/images/defaultCinema.png');

    return (
        <View style={styles.mainMovieView}>
            <Text style={styles.textTile}>Movie List View</Text>
            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.movieListView}>
                    {props.movies.results?.map((movie, key) => (
                        <MovieScene key={key} movie={movie} movieImage={movieImage} />
                    ))}
                </View>
            </ScrollView>    
        </View>
    );
}

export default MovieListView;

const styles = StyleSheet.create({
    mainMovieView: {
        backgroundColor: '#fff',
        flex: 1,
    },
    movieListView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: 15
    },
    textTile: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        paddingTop: 10,
        backgroundColor: '#fff',
        zIndex: 999
    },
    scrollViewStyle: { 
        backgroundColor: '#0000',
        alwaysBounceVertical: false,
        lazyload: true,
        marginTop: -10
    }
});