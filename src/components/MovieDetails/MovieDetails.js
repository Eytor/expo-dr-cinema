import React from 'react';
import {
    TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './MovieDetails.styles';
import Colors from '../../resources/Colors';
import Genre from '../Genre/Genre';

const getCertificateColor = (certificate) => {
    if (!certificate) {
        return Colors.success;
    }
    if (typeof certificate === 'object' && certificate !== null) {
        return certificate.is === 'N/A' ? Colors.success : Colors.danger;
    }
    if (certificate === 'Öllum leyfð') {
        return Colors.success;
    }

    if (certificate === '6 ára' || certificate === '9 ára') {
        return Colors.lightblue;
    }

    if (certificate === '12 ára') {
        return Colors.warning;
    }

    return Colors.danger;
};

const MovieDetails = ({
    imageHeight, imageWidth, movie, selectMovie, certificate,
}) => {
    const certicateColor = getCertificateColor(certificate);
    return (
        <TouchableOpacity
            key={movie.id}
            onPress={() => selectMovie(movie.id,
                movie.title,
                movie.poster,
                movie.plot,
                movie.durationMinutes,
                movie.year,
                movie.genres,
                movie.showtimes,
                certicateColor)}
        >
            <View style={styles.movieWrapper}>
                <View style={[styles.infoBoxTop, { backgroundColor: certicateColor }]}>
                    <Text style={styles.movieHeading}>
                        {movie.title}
                    </Text>
                    <Text style={styles.movieHeading}>
                        {movie.year}
                    </Text>
                </View>
                <Image
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                    resizeMode="contain"
                    source={{ uri: movie.poster }}
                />
                <View style={[styles.infoBoxBottom, { backgroundColor: certicateColor }]}>
                    {movie.genres.map((genre) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Genre
                            key={genre.ID}
                            Name={genre.Name}
                        />
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );
};

MovieDetails.propTypes = {
    selectMovie: PropTypes.func.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageWidth: PropTypes.number.isRequired,
    movie: PropTypes.object.isRequired,
    certificate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

MovieDetails.defaultProps = {
    certificate: null,
};

export default MovieDetails;
