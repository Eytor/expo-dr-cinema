import { StyleSheet } from 'react-native';
import Colors from '../../resources/Colors';


export default StyleSheet.create({
    cinemaMeta: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: Colors.charcoal,
        borderRadius: 15,
        marginBottom: 15,
    },
    header: {
        height: 50,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        color: Colors.white,
    },
    description: {
        color: Colors.gray,
        fontSize: 12,
        lineHeight: 16,
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: Colors.gray,
    },
    movieList: {
        flex: 1,
        padding: 15,
        backgroundColor: Colors.charcoal,
        borderRadius: 15,
    },
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
        backgroundColor: Colors.blue,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    infoBoxBottom: {
        position: 'relative',
        top: -2,
        width: '100%',
        padding: 15,
        backgroundColor: Colors.blue,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});
