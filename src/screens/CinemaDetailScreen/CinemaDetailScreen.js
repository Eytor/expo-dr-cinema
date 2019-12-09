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
import { getAllMovies } from '../../service/services';
import { setMovie } from '../../actions/movieActions';
import Colors from '../../resources/Colors';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

class CinemaDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.selectMovie = this.selectMovie.bind(this);
        this.state = {
            relatedMovies: [],
        };
    }


    componentWillMount() {
        this.filterMovies();
    }

    filterMovies = () => {
        getAllMovies(this.props.token).then((allMovies) => {
            // eslint-disable-next-line max-len
            const movies = allMovies.filter((movie) => movie.showtimes.findIndex((showtime) => showtime.cinema.id === this.props.cinema.id) !== -1);
            this.setState({
                relatedMovies: movies,
            });
        });
    }

    selectMovie(id, name, poster, plot, duration, releaseYear, genres, showtimes, certificateColor) {
        const itsShowtime = showtimes.filter((showTime) => showTime.cinema.id === this.props.cinema.id)[0].schedule;
        this.props.setMovie(id, name, poster, plot, duration, releaseYear, genres, itsShowtime, certificateColor);
        this.props.navigation.navigate('MovieDetailScreen', { title: name });
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
                        {movies.length > 0 ? movies : <ActivityIndicator size="small" color={Colors.gray} />}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

CinemaDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    setMovie: PropTypes.func.isRequired,
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

const mapStateToProps = ({ token, cinema }) => ({
    token,
    cinema,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    { setMovie },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetailScreen);
