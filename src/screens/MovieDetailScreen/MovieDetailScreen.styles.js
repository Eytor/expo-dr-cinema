import { StyleSheet } from 'react-native';
import Colors from '../../resources/Colors';


export default StyleSheet.create({
    movieWrapper: {
        borderRadius: 15,
        backgroundColor: Colors.charcoal,
        position: 'relative',
        marginBottom: 15,
    },

    moviePoster: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    certificateDot: {
        width: 10,
        height: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
    headerText: {
        color: Colors.white,
        fontSize: 16,
    },
    body: {
        marginBottom: 15,
    },
    plotText: {
        fontSize: 14,
        lineHeight: 18,
        color: Colors.gray,
    },
    genresWrapper: {
        marginBottom: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    genre: {
        color: Colors.gray,
        marginRight: 10,
        fontSize: 14,
    },

});
