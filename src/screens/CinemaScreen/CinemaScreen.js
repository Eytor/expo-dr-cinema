import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    ScrollView,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign';
import defaultStyles from '../../resources/defaultStyles';
import styles from './CinemaScreen.styles';
import getCurrentToken from '../../actions/tokenActions';
import { setCinema, getCinemas } from '../../actions/cinemaActions';
import Cinema from '../../components/Cinemas/Cinemas';

class CinemaScreen extends Component {
    constructor(props) {
        super(props);
        this.selectCinema = this.selectCinema.bind(this);
        this.state = {
            isLoading: true,
        };
    }

    async componentWillMount() {
        const { getToken, getAllCinemas, token } = this.props;
        await getToken();
        await getAllCinemas(token);
        this.setState({ isLoading: false });
    }

    /**
     * Function that sets the global state of current cinema
     * to the cinema passed in.
     *
     * @param {object} cinema - object of cinemas
     * @memberof CinemaScreen
     */
    selectCinema(cinema) {
        const { setCurrentCinema, navigation } = this.props;
        setCurrentCinema(cinema.id, cinema.name, cinema['address\t'], cinema.city, cinema.phone, cinema.website, cinema.description);
        navigation.navigate('CinemaDetailScreen', { title: cinema.name });
    }

    render() {
        const { cinemas, navigation } = this.props;
        const cinemasList = cinemas.map((cinema) => (
            <Cinema
                key={cinema.id}
                cinema={cinema}
                selectCinema={this.selectCinema}
            />
        ));
        return (
            <View
                style={[
                    defaultStyles.container,
                    this.state.isLoading && defaultStyles.center,
                ]}
            >
                {this.state.isLoading ? (
                    <View style={defaultStyles.loaderWrapper}>
                        <ActivityIndicator size="large" color="#383B53" />
                    </View>
                ) : (
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={styles.upComingMoviesBtn}
                            onPress={() => navigation.navigate('UpcomingMovies', { title: 'Upcoming Movies' })}
                        >
                            <Text style={styles.upComingMoviesBtnText}>Væntanlega kvikmyndir</Text>
                            <AntIcon name="arrowright" color="#fff" size={20} />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <Text style={[defaultStyles.largeHeading, { paddingLeft: 15 }]}>
                                Kvikmyndahús
                            </Text>
                            <ScrollView style={styles.cinemaWrapper}>
                                {cinemasList}
                            </ScrollView>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

CinemaScreen.propTypes = {
    getToken: PropTypes.func.isRequired,
    getAllCinemas: PropTypes.func.isRequired,
    setCurrentCinema: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    cinemas: PropTypes.array.isRequired,
};

const mapStateToProps = ({ token, cinemas }) => ({ token, cinemas });

const mapDispatchToProps = (dispatch) => bindActionCreators(
    { getToken: getCurrentToken, setCurrentCinema: setCinema, getAllCinemas: getCinemas },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CinemaScreen);
