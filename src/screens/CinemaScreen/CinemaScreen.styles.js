import { StyleSheet } from 'react-native';
import Colors from '../../resources/Colors';

export default StyleSheet.create({
    cinemaWrapper: {
        flex: 1,
        paddingHorizontal: 15,
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
