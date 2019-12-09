import React, { Component } from 'react';
import {
    TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './UpcomingMovie.styles';
import Colors from '../../resources/Colors';

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
        const trailers = movie.trailers.length > 0 ? movie.trailers[0].results : [];
        return (
            <TouchableOpacity
                key={movie.id}
                onPress={() => selectMovie(movie.id,
                    movie.title,
                    movie.poster,
                    movie.plot,
                    trailers)}
            >
                <View style={styles.movieWrapper}>
                    <View style={[styles.infoBoxTop, { backgroundColor: Colors.success }]}>
                        <Text style={styles.movieHeading}>
                            {movie.title}
                        </Text>
                        <Text style={styles.movieHeading}>
                            {newDate}
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
                    <View style={[styles.infoBoxBottom, { backgroundColor: Colors.success }]} />
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
