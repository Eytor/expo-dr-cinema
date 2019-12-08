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

    filterMovies = () => {

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
    cinema: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStoreState) => ({ cinema: reduxStoreState.cinema });

export default connect(mapStateToProps)(CinemaDetailScreen);
