import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultStyles from '../../resources/defaultStyles';
import styles from './CinemaDetailScreen.styles';
import { getAllMovies } from '../../service/services';
import { setMovie } from '../../actions/movieActions';
import CinemaDetails from '../../components/CinemaDetails/CinemaDetails';

class CinemaDetailScreen extends Component {
    constructor(props) {
        super(props);
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

    selectMovie(id, name, poster, plot, duration, releaseYear, genres) {
        setMovie(id, name, poster, plot, duration, releaseYear, genres);
        console.log('time to navigate');
        this.props.navigation.navigate('MovieDetailsScreen', { title: name });
    }

    render() {
        const { cinema } = this.props;
        const dimensions = Dimensions.get('window');
        const imageHeight = 445;
        const imageWidth = dimensions.width;
        const movies = this.state.relatedMovies.map((movie) => (
            <CinemaDetails
                key={movie.id}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                movie={movie}

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

                        {movies}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

CinemaDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
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

export default connect(mapStateToProps, { setMovie })(CinemaDetailScreen);
