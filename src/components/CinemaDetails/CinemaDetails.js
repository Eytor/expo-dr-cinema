import React, { Component } from 'react';
import {
    TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CinemaDetails.styles';
import Colors from '../../resources/Colors';

class CinemaDetails extends Component {
    getCertificateColor = () => {
        const { certificate } = this.props;
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
    }

    render() {
        const {
            imageHeight,
            imageWidth,
            movie,
            selectMovie,
        } = this.props;
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
                    movie.showtimes)}
            >
                <View style={styles.movieWrapper}>
                    <View style={[styles.infoBoxTop, { backgroundColor: this.getCertificateColor() }]}>
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
                    <View style={[styles.infoBoxBottom, { backgroundColor: this.getCertificateColor() }]}>
                        {movie.genres.map((genre, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <View key={index}>
                                <Text style={styles.movieGenre}>{genre.Name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

CinemaDetails.propTypes = {
    selectMovie: PropTypes.func.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageWidth: PropTypes.number.isRequired,
    movie: PropTypes.object.isRequired,
    certificate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

CinemaDetails.defaultProps = {
    certificate: null,
};

export default CinemaDetails;
