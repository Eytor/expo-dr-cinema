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
});
