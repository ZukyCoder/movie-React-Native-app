import {StyleSheet,View, Text, Image} from 'react-native';

function MovieListView() {
const movieData = require('./testMovies.json');
const movieImage = require('./assets/images/defaultCinema.png');

    return (
        <View style={styles.mainMovieView}>
            <Text style={styles.textTile}>Movie List View</Text>
            <View style={styles.movieListView}>
                {movieData.results.map((movie) => (
                    <View style={styles.movieCellView}>
                        <View style={styles.movieCellImageContainer}>
                           <Image style={styles.movieImage} source={movieImage} />
                        </View>
                        <View style={styles.movieCellText}>
                            <Text>{movie.title}</Text>
                            <Text>{'Hello'}</Text>
                        </View>
                    </View>
                ))}
            </View>
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
        padding: 15
    },
    movieCellView:  {
        width: '45%',
        height: 250,
        backgroundColor: '#0000',
        marginBottom: 25,
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 10, // for android
    },
    movieCellImageContainer: {
        height: 130,
        width: '100%',
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadiusTopLeft: 15,
        borderRadiusTopRight: 15,
    },
    movieImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    movieCellText: {
        width: '100%',
        height: 120,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        backgroundColor: 'lightblue'
    }
});