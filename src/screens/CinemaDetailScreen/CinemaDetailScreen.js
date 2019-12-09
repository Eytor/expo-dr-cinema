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
import { TouchableOpacity } from 'react-native-gesture-handler';
import defaultStyles from '../../resources/defaultStyles';
import styles from './CinemaDetailScreen.styles';
import { getAllMovies } from '../../service/services';

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

    render() {
        const { cinema } = this.props;
        const dimensions = Dimensions.get('window');
        const imageHeight = 445;
        const imageWidth = dimensions.width;
        const movies = this.state.relatedMovies.map((movie) => (
            <TouchableOpacity key={movie.id}>
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
        ));

        return (
            <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.cinemaMeta}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{cinema.name}</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.description}>{cinema.description.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
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
    // navigation: PropTypes.object.isRequired,
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

export default connect(mapStateToProps)(CinemaDetailScreen);
