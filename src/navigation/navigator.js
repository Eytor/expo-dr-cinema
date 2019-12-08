import { createStackNavigator } from 'react-navigation-stack';
import CinemaScreen from '../screens/CinemaScreen/CinemaScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: CinemaScreen,
        navigationOptions: () => ({
            headerTitle: 'All cinemas',
        }),
    },
});

export default AppNavigator;
