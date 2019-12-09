import React, { Component } from 'react';
import {
    TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './UpcomingMovie.styles';

class MovieDetails extends Component {
    render() {
        const {
            imageHeight,
            imageWidth,
            movie,
            selectMovie,
        } = this.props;
        const months = ['janúar', 'febrúar', 'mars', 'apríl', 'maí', 'júní', 'júlí', 'ágúst', 'september', 'október', 'nóvember', 'desember'];
        const releaseDate = new Date(movie['release-dateIS']);
        const month = months[releaseDate.getMonth()];
        const newDate = `${releaseDate.getDate()}. ${month} ${releaseDate.getFullYear()}`;
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
                    <View style={[styles.infoBoxTop]}>
                        <Text style={styles.movieHeading}>
                            {movie.title}
                        </Text>
                        <Text style={styles.movieHeading}>
                            {newDate}
                        </Text>
                    </View>
                    <Image
                        style={[styles.moviePoster, { width: imageWidth, height: imageHeight }]}
                        resizeMode="contain"
                        source={{ uri: movie.poster }}
                    />
                </View>
            </TouchableOpacity>

        );
    }
}

MovieDetails.propTypes = {
    selectMovie: PropTypes.func.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageWidth: PropTypes.number.isRequired,
    movie: PropTypes.object.isRequired,
};

export default MovieDetails;
