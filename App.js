import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import MovieListView from './MovieListView';

export default function App() {
  return (
    <View style={styles.container}>
      <MovieListView />
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
