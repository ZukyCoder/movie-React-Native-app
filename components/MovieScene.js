import { StyleSheet,View, Text, Image} from 'react-native';
function movieScene(props) {
const imageUrl = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`

    return(
        console.log(imageUrl),
        <View style={movieSceneStyles.movieCellView}>
            <View style={movieSceneStyles.movieCellImageContainer}>
                <Image style={movieSceneStyles.movieImage} source={{uri:imageUrl}} />
            </View>
            <View style={movieSceneStyles.movieCellText}>
                <Text style={movieSceneStyles.movieTitleText}>{props.movie.title}</Text>
                <Text style={movieSceneStyles.movieOverviewText}>{props.movie.release_date}</Text>
            </View>
        </View>
    )
}

export default movieScene

const movieSceneStyles = StyleSheet.create({
    movieCellView:  {
        width: '45%',
        height: 300,
        marginBottom: 20,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: -3,
            height: -5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 3,
    },
    movieCellImageContainer: {
        width: '100%',
        height: 200,
        //paddingVertical: 15,
        //backgroundColor: 'white',
        //padding: 10
    },
    movieImage: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    movieCellText: {
        width: '100%',
        height: 100,
        padding: 10,
        backgroundColor: 'lightblue',
    },
    movieTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    movieReleaseText: {
        fontSize: 14,
        color: '#666',
    },
})