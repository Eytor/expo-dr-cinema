import { StyleSheet } from 'react-native';
import Colors from '../../resources/Colors';


export default StyleSheet.create({
    movieWrapper: {
        flex: 1,
        marginBottom: 30,
        alignItems: 'center',
    },
    movieHeading: {
        fontSize: 16,
        color: Colors.white,
    },
    movieGenre: {
        color: Colors.white,
        fontSize: 14,
        marginBottom: 5,
    },
    movieposterWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    moviePoster: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    infoBoxTop: {
        position: 'relative',
        top: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        backgroundColor: Colors.charcoal,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
});
