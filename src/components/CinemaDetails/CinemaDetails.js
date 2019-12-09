import React, { Component } from 'react';
import {
    TouchableOpacity, View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CinemaDetails.styles';

class CinemaDetails extends Component {
    render() {
        const {
            imageHeight,
            imageWidth,
            movie,

        } = this.props;
        return (
            <TouchableOpacity
                key={movie.id}
                onPress={() => this.selectMovie(movie.id,
                    movie.title,
                    movie.poster,
                    movie.plot,
                    movie.durationMinutes,
                    movie.year,
                    movie.genres)}
            >
                <View style={styles.movieWrapper}>
                    <View style={styles.infoBoxTop}>
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
                            position: 'relative',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        resizeMode="contain"
                        source={{ uri: movie.poster }}
                    />
                    <View style={styles.infoBoxBottom}>
                        {movie.genres.map((genre) => (
                            <View key={genre.ID}>
                                <Text>{genre.Name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

CinemaDetails.propTypes = {
    imageHeight: PropTypes.number.isRequired,
    imageWidth: PropTypes.number.isRequired,
    movie: PropTypes.object.isRequired,
};

export default CinemaDetails;
