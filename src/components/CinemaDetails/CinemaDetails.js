import React, { Component } from 'react';
import {
    TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CinemaDetails.styles';
import Colors from '../../resources/Colors';

class CinemaDetails extends Component {
    getCertificateColor = () => {
        if (typeof this.props.certificate === 'object' && typeof this.props.certificate !== null) {
            return this.props.certificate.is === 'N/A' ? Colors.success : Colors.danger;
        }
        if (this.props.certificate === 'Öllum leyfð') {
            return Colors.success;
        }

        if (this.props.certificate === '6 ára' || this.props.certificate === '9 ára') {
            return Colors.lightblue;
        }

        if (this.props.certificate === '12 ára') {
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
        const certicateColor = this.getCertificateColor();
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
                            <View key={genre.ID}>
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
    ]).isRequired,
};

export default CinemaDetails;
