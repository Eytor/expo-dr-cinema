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
import { getAllCinemas } from '../../service/services';
import styles from './CinemaScreen.styles';
import { getCurrentToken } from '../../actions/tokenActions';
import { setCinema } from '../../actions/cinemaActions';
import Cinema from '../../components/Cinemas/Cinemas';

class CinemaScreen extends Component {
    constructor(props) {
        super(props);
        this.selectCinema = this.selectCinema.bind(this);
        this.state = {
            cinemaList: [],
            isLoading: true,
        };
    }

    async componentWillMount() {
        await this.props.getCurrentToken();
        getAllCinemas(this.props.token)
            .then((cinemaList) => {
                this.setState({
                    cinemaList: cinemaList.sort((a, b) => a.name.localeCompare(b.name)),
                });
            })
            .then(() => {
                this.setState({
                    isLoading: false,
                });
            });
    }

    selectCinema(cinema) {
        this.props.setCinema(cinema.id, cinema.name, cinema['address\t'], cinema.city, cinema.phone, cinema.website, cinema.description);
        this.props.navigation.navigate('CinemaDetailScreen', { title: cinema.name });
    }

    render() {
        const cinemas = this.state.cinemaList.map((cinema) => (
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
                            onPress={() => this.props.navigation.navigate('UpcomingMovies', { title: 'Upcoming Movies' })}
                        >
                            <Text style={styles.upComingMoviesBtnText}>Væntanlega kvikmyndir</Text>
                            <AntIcon name="arrowright" color="#fff" size={20} />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <Text style={[defaultStyles.largeHeading, { paddingLeft: 15 }]}>
                                Kvikmyndahús
                            </Text>
                            <ScrollView style={styles.cinemaWrapper}>
                                {cinemas}
                            </ScrollView>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

CinemaScreen.propTypes = {
    getCurrentToken: PropTypes.func.isRequired,
    setCinema: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStoreState) => ({ token: reduxStoreState.token });

const mapDispatchToProps = (dispatch) => bindActionCreators(
    { getCurrentToken, setCinema },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CinemaScreen);
