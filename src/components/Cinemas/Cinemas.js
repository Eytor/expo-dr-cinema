import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './Cinemas.styles';

const Cinema = ({ cinema, selectCinema }) => (
    <TouchableOpacity
        onPress={() => selectCinema(cinema)}
        style={styles.cinemaItem}
    >
        <View style={styles.cinemaTextWrapper}>
            <Text style={styles.cinemaItemText}>{cinema.name}</Text>
            <Text style={styles.cinemaWebsite}>{cinema.website}</Text>
        </View>
        <View style={styles.cinemaIconWrapper}>
            <AntIcon name="arrowright" color="#fff" size={20} />
        </View>
    </TouchableOpacity>
);

Cinema.propTypes = {
    selectCinema: PropTypes.func.isRequired,
    cinema: PropTypes.object.isRequired,
};
export default Cinema;
