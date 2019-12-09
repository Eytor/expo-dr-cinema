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
import { WebView } from 'react-native-webview';
import defaultStyles from '../../resources/defaultStyles';
import styles from './UpcomingMovieDetails.styles';

class MovieDetailScreen extends Component {
    render() {
        const { movie } = this.props;
        const dimensions = Dimensions.get('window');
        const imageWidth = (dimensions.width - 30);
        const imageHeight = (dimensions.height) - 95;
        console.log(movie.trailers);
        const trailers = movie.trailers.map((trailer, index) => (
            <View key={index}>
                <Text style={styles.headerText}>{`${trailer.site}: ${trailer.name}`}</Text>
                <WebView
                    style={{ height: 200, width: '100%' }}
                    javaScriptEnabled
                    source={{ uri: trailer.url }}
                />
            </View>
        ));
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
                    <View style={styles.movieWrapper}>
                        <Image
                            style={[styles.moviePoster, { width: imageWidth, height: imageHeight }]}
                            resizeMode="cover"
                            source={{ uri: movie.poster }}
                        />
                        <View style={{ padding: 15 }}>
                            <View style={styles.header}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.headerText}>{movie.name}</Text>
                                </View>
                            </View>
                            <View style={styles.body}>
                                <Text style={styles.plotText}>
                                    {movie.plot.replace(/\n/g, '')}
                                </Text>
                            </View>
                        </View>
                        <View>
                            {trailers}
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

MovieDetailScreen.propTypes = {
    // navigation: PropTypes.object.isRequired,
    // token: PropTypes.string.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        plot: PropTypes.string.isRequired,
        trailers: PropTypes.array.isRequired,
    }).isRequired,
};


const mapStateToProps = (props) => ({
    movie: props.movie,
});

export default connect(mapStateToProps)(MovieDetailScreen);
