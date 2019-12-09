import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultStyles from '../../resources/defaultStyles';
import styles from './MovieDetailScreen.styles';

class MovieDetailScreen extends Component {
    render() {
        const { movie } = this.props;
        const genres = movie.genres.map((genre) => (
            <View>
                <Text>{genre.Name}</Text>
            </View>
        ));
        return (
            <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.cinemaMeta}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{movie.name}</Text>
                        </View>
                        <Image
                            style={{
                                width: 100,
                                height: 200,
                                position: 'relative',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                            }}
                            resizeMode="contain"
                            source={{ uri: movie.poster }}
                        />
                        <View style={styles.body}>
                            <Text style={styles.description}>
                                {movie.plot.replace(/<\/?[^>]+(>|$)/g, '')}
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>
                                {`${movie.duration} mínútur`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.movieList}>
                        {genres}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

MovieDetailScreen.propTypes = {
    // navigation: PropTypes.object.isRequired,
    // token: PropTypes.string.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        plot: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        releaseYear: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
    }).isRequired,
};


const mapStateToProps = ({ token, movie }) => ({
    token,
    movie,
});

export default connect(mapStateToProps)(MovieDetailScreen);
