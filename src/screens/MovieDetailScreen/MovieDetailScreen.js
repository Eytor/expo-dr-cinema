import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultStyles from '../../resources/defaultStyles';
import styles from './MovieDetailScreen.styles';
import ShowTime from '../../components/ShowTime/ShowTime';
import Genre from '../../components/Genre/Genre';

class MovieDetailScreen extends Component {
    render() {
        const { movie } = this.props;
        const dimensions = Dimensions.get('window');
        const imageWidth = (dimensions.width - 30);
        const imageHeight = (dimensions.height) - 95;
        const genres = movie.genres.map((genre, index) => (
            <Genre
                key={index}
                Name={genre.Name}
            />
        ));
        const showtimes = movie.showtimes.map((showtime, index) => (
            <ShowTime
                key={index}
                showtime={showtime}
                index={index}
            />
        ));
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
                    <View style={styles.movieWrapper}>
                        <Image
                            style={[styles.moviePoster, { width: imageWidth, height: imageHeight }]}
                            resizeMode="cover"
                            source={{ uri: movie.poster }}
                        />
                        <View style={{ padding: 15 }}>
                            <View style={styles.header}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.headerText}>{movie.name}</Text>
                                    <View style={
                                        [styles.certificateDot,
                                            { backgroundColor: movie.certificateColor },
                                        ]
                                    }
                                    />
                                </View>
                                <Text style={styles.headerText}>
                                    {`${movie.duration} mínútur`}
                                </Text>
                            </View>
                            <View style={styles.body}>
                                <Text style={styles.plotText}>
                                    {movie.plot.replace(/\n/g, '')}
                                </Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.headerText}>Flokkar:</Text>
                                <View style={styles.genresWrapper}>
                                    {genres}
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.movieWrapper, { padding: 15 }]}>
                        <Text style={[styles.headerText, { marginBottom: 15 }]}>
                            {`Sýningar í dag í ${this.props.cinema.name}`}
                        </Text>
                        {showtimes}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

MovieDetailScreen.propTypes = {
    // navigation: PropTypes.object.isRequired,
    // token: PropTypes.string.isRequired,
    cinema: PropTypes.object.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        plot: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        releaseYear: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        showtimes: PropTypes.array.isRequired,
        certificateColor: PropTypes.string.isRequired,
    }).isRequired,
};


const mapStateToProps = ({ token, movie, cinema }) => ({
    token,
    movie,
    cinema,
});

export default connect(mapStateToProps)(MovieDetailScreen);
