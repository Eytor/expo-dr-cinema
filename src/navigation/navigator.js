import { createStackNavigator } from 'react-navigation-stack';
import CinemaScreen from '../screens/CinemaScreen/CinemaScreen';
import CinemaDetailScreen from '../screens/CinemaDetailScreen/CinemaDetailScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen/MovieDetailScreen';
import UpcomingMoviesScreen from '../screens/UpcomingMoviesScreen/UpcomingMoviesScreen';
import UpcomingMovieDetails from '../screens/UpcomingMovieDetails/UpcomingMovieDetails';
import Colors from '../resources/Colors';

const AppNavigator = createStackNavigator({
    Home: {
        screen: CinemaScreen,
        navigationOptions: () => ({
            headerTitle: 'Hvað er í bíó?',
            headerTitleStyle: {
                color: '#fff',
                fontWeight: '400',
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
                fontWeight: '400',
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
                fontWeight: '400',
            },
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: Colors.dark,
            },
        }),
    },
    UpcomingMovies: {
        screen: UpcomingMoviesScreen,
        navigationOptions: () => ({
            headerTitle: 'Væntanlegar kvikmyndir',
            headerTitleStyle: {
                color: '#fff',
                fontWeight: '400',
            },
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: Colors.dark,
            },
        }),
    },
    UpcomingMovieDetails: {
        screen: UpcomingMovieDetails,
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
