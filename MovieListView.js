import {StyleSheet,View, Text} from 'react-native';

function MovieListView() {
const movieData = require('./testMovies.json');

    return (
        <View>
            <Text style={styles.textTile}>Movie List View</Text>
            <View style={styles.movieListView}>
                {movieData.results.map((movie) => (
                    <View style={styles.movieCellView}>
                        <View style={styles.movieCellImage}>
                           
                        </View>
                        <View>
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
        padding: 15
    },
    textTile: {
        text: 'bold'
    },
    movieCellView:  {
        width: '45%',
        height: 250,
        backgroundColor: 'grey',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 25
    },
    movieCellImage: {
        height: 130,
        width: '100%',
        backgroundColor: 'pink',

    }
});