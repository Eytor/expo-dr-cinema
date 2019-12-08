import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultStyles from '../../resources/defaultStyles';
import styles from './CinemaDetailScreen.styles';

class CinemaDetailScreen extends Component {
    render() {
        const { cinema } = this.props;

        return (
            <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
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
