import { StyleSheet } from 'react-native';
import Colors from '../../resources/Colors';


export default StyleSheet.create({
    movieWrapper: {
        flex: 1,
        marginBottom: 30,
        alignItems: 'center',
    },
    movieHeading: {
        fontSize: 14,
        color: Colors.white,
    },
    movieGenre: {
        color: Colors.white,
        fontSize: 14,
        marginBottom: 5,
        marginRight: 10,
    },
    movieposterWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    movieposter: {
        alignSelf: 'stretch',
    },
    infoBoxTop: {
        position: 'relative',
        top: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        backgroundColor: Colors.danger,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    infoBoxBottom: {
        position: 'relative',
        top: -2,
        width: '100%',
        padding: 15,
        backgroundColor: Colors.warning,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
});
