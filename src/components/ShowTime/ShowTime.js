import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Linking } from 'expo';
import PropTypes from 'prop-types';
import styles from './ShowTime.styles';

const ShowTime = ({
    showtime,
    index,

}) => (

    <TouchableOpacity onPress={() => Linking.openURL(showtime.purchase_url)} key={index}>
        <Text style={styles.buyNow}>{`Kaupa miða klukkan ${showtime.time.split(' ')[0]} í sal ${showtime.time.split(' ')[1]}`}</Text>
    </TouchableOpacity>
);

ShowTime.propTypes = {
    showtime: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default ShowTime;
