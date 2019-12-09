import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import defaultStyles from '../../resources/defaultStyles';
import { getAuthToken, getAllCinemas } from '../../service/services';
import styles from './CinemaScreen.styles';
import { setToken } from '../../actions/tokenActions';
import { setCinema } from '../../actions/cinemaActions';
import Cinema from '../../components/Cinemas';

class CinemaScreen extends Component {
    constructor(props) {
        super(props);
        this.selectCinema = this.selectCinema.bind(this);
        this.state = {
            cinemaList: [],
            isLoading: true,
        };
    }

    componentWillMount() {
        getAuthToken()
            .then((token) => {
                this.props.setToken(token);
            })
            .then(() => {
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
            });
    }

    selectCinema(cinema) {
        this.props.setCinema(cinema.id, cinema.name, cinema['address\t'], cinema.city, cinema.phone, cinema.website, cinema.description);
        this.props.navigation.navigate('CinemaDetailScreen');
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
                    <ScrollView style={styles.cinemaWrapper}>
                        {cinemas}
                    </ScrollView>
                )}
            </View>
        );
    }
}

CinemaScreen.propTypes = {
    setToken: PropTypes.func.isRequired,
    setCinema: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStoreState) => ({ token: reduxStoreState.token });

const mapDispatchToProps = (dispatch) => bindActionCreators(
    { setToken, setCinema },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CinemaScreen);
