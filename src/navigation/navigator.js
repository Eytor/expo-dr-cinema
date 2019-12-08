import { createStackNavigator } from 'react-navigation-stack';
import CinemaScreen from '../screens/CinemaScreen/CinemaScreen';
import CinemaDetailScreen from '../screens/CinemaDetailScreen/CinemaDetailScreen';
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
    },
});

export default AppNavigator;
