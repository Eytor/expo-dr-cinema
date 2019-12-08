import { StyleSheet } from 'react-native';
import Colors from '../../resources/Colors';

export default StyleSheet.create({
    cinemaWrapper: {
        flex: 1,
    },
    cinemaItem: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cinemaTextWrapper: {
        flex: 5,
    },
    cinemaIconWrapper: {
        flex: 1,
    },
    cinemaItemText: {
        fontSize: 16,
        color: Colors.white,
    },
});
