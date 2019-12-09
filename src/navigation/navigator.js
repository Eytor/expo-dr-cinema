import { createStackNavigator } from 'react-navigation-stack';
import CinemaScreen from '../screens/CinemaScreen/CinemaScreen';
import CinemaDetailScreen from '../screens/CinemaDetailScreen/CinemaDetailScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen/MovieDetailScreen';
import UpcomingMovieTimes from '../screens/UpcomingMovieTimes/UpcomingMovieTimes';
import Colors from '../resources/Colors';

const AppNavigator = createStackNavigator({
    Home: {
        screen: CinemaScreen,
        navigationOptions: () => ({
            headerTitle: 'All cinemas',
            headerTitleStyle: {
                color: '#fff',
            },
            headerStyle: {
                backgroundColor: Colors.dark,
            },
        }),
    },
    CinemaDetailScreen: {
        screen: CinemaDetailScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
            headerTitleStyle: {
                color: '#fff',
            },
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: Colors.dark,
            },
        }),
    },
    MovieDetailScreen: {
        screen: MovieDetailScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
            headerTitleStyle: {
                color: '#fff',
            },
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: Colors.dark,
            },
        }),
    },
    UpcomingMovieTimes: {
        screen: UpcomingMovieTimes,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
            headerTitleStyle: {
                color: '#fff',
            },
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: Colors.dark,
            },
        }),
    },
});


export default AppNavigator;
