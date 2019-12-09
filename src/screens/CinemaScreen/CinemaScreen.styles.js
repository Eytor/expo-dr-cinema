import { StyleSheet } from 'react-native';
import Colors from '../../resources/Colors';

export default StyleSheet.create({
    cinemaWrapper: {
        flex: 1,
        paddingHorizontal: 15,
    },
    cinemaItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: Colors.charcoal,
        marginBottom: 15,
        padding: 10,
    },
    cinemaTextWrapper: {
        flex: 5,
    },
    cinemaIconWrapper: {
        flex: 1,
        width: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    cinemaItemText: {
        fontSize: 16,
        color: Colors.white,
    },
    cinemaWebsite: {
        fontSize: 14,
        color: Colors.gray,
    },

    upComingMoviesBtn: {
        borderRadius: 15,
        padding: 15,
        backgroundColor: Colors.warning,
        marginHorizontal: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    upComingMoviesBtnText: {
        fontSize: 16,
        color: Colors.white,
    },

});
