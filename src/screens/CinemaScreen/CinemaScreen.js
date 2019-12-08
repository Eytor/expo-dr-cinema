import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import defaultStyles from '../../resources/defaultStyles';
import { getAuthToken, getAllCinemas } from '../../service/services';
import styles from './CinemaScreen.styles';
import { setToken } from '../../actions/tokenActions';

class CinemaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemaList: [],
            isLoading: true,
        };
    }

    componentWillMount() {
        getAuthToken().then((token) => {
            this.props.setToken(token);
        }).then(() => {
            getAllCinemas(this.props.token).then((cinemaList) => {
                this.setState({
                    cinemaList,
                });
            }).then(() => {
                this.setState({
                    isLoading: false,
                });
            });
        });
    }


    render() {
        const cinemas = this.state.cinemaList.map((cinema) => (
            <View style={styles.cinemaItem} key={cinema.id}>
                <View style={styles.cinemaTextWrapper}>
                    <Text style={styles.cinemaItemText}>{cinema.name}</Text>
                </View>
                <View style={styles.cinemaIconWrapper}>
                    <AntIcon name="arrowright" size={15} />
                </View>

            </View>
        ));
        return (
            <View style={[defaultStyles.container, this.state.isLoading && defaultStyles.center]}>
                {
                    this.state.isLoading ? (
                        <View style={defaultStyles.loaderWrapper}>
                            <ActivityIndicator size="large" color="#3F88C5" />
                        </View>
                    ) : (
                        <View style={styles.cinemaWrapper}>
                            {cinemas}
                        </View>
                    )
                }
            </View>
        );
    }
}

CinemaScreen.propTypes = {
    setToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
};

const mapStateToProps = (reduxStoreState) => ({ token: reduxStoreState });

export default connect(mapStateToProps, { setToken })(CinemaScreen);
