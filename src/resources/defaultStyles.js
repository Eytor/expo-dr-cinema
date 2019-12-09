import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
        padding: 15,
        paddingHorizontal: 0,
        position: 'relative',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        color: Colors.white,
        marginBottom: 15,
    },
});
