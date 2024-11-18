import { StyleSheet,View, Text, Image} from 'react-native';
function movieScene(props) {

    return(
        <View style={styles.movieCellView}>
            <View style={styles.movieCellImageContainer}>
                <Image style={styles.movieImage} source={props.movieImage} />
            </View>
            <View style={styles.movieCellText}>
                <Text style={styles.movieTitleText}>{movie.title}</Text>
                <Text style={styles.movieOverviewText}>{movie.overview.length > 100 ? movie.overview.substring(0, 85) + '...' : movie.overview + '...'}</Text>
            </View>
        </View>
    )
}

export default movieScene

const styles = StyleSheet.create({
    movieCellView:  {
        width: '45%',
        height: 270,
        overflow: 'hidden',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
        margin: 5
    },
    movieCellImageContainer: {
        width: '100%',
        height: 190,
        overflow: 'hidden',
    },
    movieImage: {
        width: '100%',
        height: '100%',
    },
    movieCellText: {
        flex: 1,
        padding: 10,
    },
    movieTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    movieOverviewText: {
        fontSize: 14,
        color: '#666',
    },
})