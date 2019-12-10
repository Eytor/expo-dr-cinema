import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Genre.styles';

const Genre = ({ Name }) => (
    <Text style={styles.movieGenre}>{Name}</Text>
);

Genre.propTypes = {
    Name: PropTypes.string.isRequired,
};

export default Genre;
