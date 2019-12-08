import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
            const movies = allMovies.filter((movie) => movie.showtimes[0].cinema.id === this.props.cinema.id);
            console.log(movies);
        });
    }

    render() {
        const { cinema } = this.props;
        const { width, height } = Dimensions.get('window');

        return (
            <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.cinemaMeta}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{cinema.name}</Text>
                        </View>
                        {cinema.description && (
                            <View style={styles.body}>
                                <Text style={styles.description}>{cinema.description.replace(/<\/?[^>]+(>|$)/g, '')}</Text>
                            </View>
                        )}
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
                        <Text>Hér kemur meira stuff!</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

CinemaDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    cinema: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStoreState) => ({ token: reduxStoreState.token, cinema: reduxStoreState.cinema });

export default connect(mapStateToProps)(CinemaDetailScreen);
