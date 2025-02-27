import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import defaultStyles from '../../resources/defaultStyles';
import styles from './CinemaDetailScreen.styles';
import { setMovie, getMovies } from '../../actions/movieActions';
import Colors from '../../resources/Colors';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

class CinemaDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.selectMovie = this.selectMovie.bind(this);
        this.state = {
            relatedMovies: [],
            loading: true
        };
    }

    async componentWillMount() {
        const { getAllMovies, token, cinema } = this.props;
        await getAllMovies(token);
        const { movies } = this.props;
        const moviesList = movies.filter((movie) => movie.showtimes.findIndex(
            (showtime) => showtime.cinema.id === cinema.id,
        ) !== -1);
        this.setState({
            relatedMovies: moviesList,
            loading: false
        });
    }

    /**
     * Fuction that sets the global redux state to set which movie is selected
     *
     * @param {number} id - id of selected movie
     * @param {string} name - name of selected movie
     * @param {string} poster - poster of the selected movie
     * @param {string} plot - plot of the selected movie
     * @param {number} duration - duration of the selected movie
     * @param {string} releaseYear - year of release of selected movie
     * @param {array} genres - list of genres related to this movie
     * @param {array} showtimes - list of showtimes for this movie
     * @param {string} certificateColor - color for the certificate of the movie
     * @memberof CinemaDetailScreen
     */
    selectMovie(
        id,
        name,
        poster,
        plot,
        duration,
        releaseYear,
        genres,
        showtimes,
        certificateColor,
    ) {
        const { cinema, setCurrentMovie, navigation } = this.props;
        const itsShowtime = showtimes.filter(
            (showTime) => showTime.cinema.id === cinema.id,
        )[0].schedule;
        setCurrentMovie(
            id, name, poster, plot, duration,
            releaseYear, genres, itsShowtime, certificateColor,
        );
        navigation.navigate('MovieDetailScreen', { title: name });
    }

    render() {
        const { cinema } = this.props;
        const dimensions = Dimensions.get('window');
        const imageHeight = ((dimensions.width - 60) * 10) / 6.75;
        const imageWidth = (dimensions.width - 60);
        const movies = this.state.relatedMovies.map((movie) => (
            <MovieDetails
                key={movie.id}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                movie={movie}
                selectMovie={this.selectMovie}
                certificate={movie.certificateIS}

            />
        ));

        return (
            <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.cinemaMeta}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{cinema.name}</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.description}>
                                {cinema.description.replace(/<\/?[^>]+(>|$)/g, '')}
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>
                                {`${cinema.address}, ${cinema.city}`}
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>
                                {cinema.website}
                            </Text>
                            <Text style={styles.footerText}>
                                {cinema.phone}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.movieList}>
                        <View>
                            <Text style={defaultStyles.heading}>
                                {`Í ${cinema.name} núna`}
                            </Text>
                        </View>
                        {!this.state.loading ?
                            movies.length > 0 ?
                            movies :
                            <Text style={{color: '#FFF'}}>Engar myndir í bíó í dag</Text> :
                            <ActivityIndicator size="small" color={Colors.gray} />}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

CinemaDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    setCurrentMovie: PropTypes.func.isRequired,
    getAllMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    cinema: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        phone: PropTypes.string,
        website: PropTypes.string.isRequired,
    }),
};

CinemaDetailScreen.defaultProps = {
    cinema: PropTypes.shape({
        description: '',
        phone: '',
    }),
};

const mapStateToProps = ({ token, cinema, movies }) => ({
    token,
    cinema,
    movies,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    { setCurrentMovie: setMovie, getAllMovies: getMovies },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetailScreen);
