import React from 'react';
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
import styles from './UpcomingMovieDetailsScreen.styles';

const UpcomingMovieDetailScreen = ({ movie }) => {
    const dimensions = Dimensions.get('window');
    const imageWidth = (dimensions.width - 30);
    const imageHeight = (dimensions.height) - 95;
    const trailers = movie.trailers.map((trailer, index) => (
        <View key={index}>
            <Text style={[styles.headerText, { padding: 15 }]}>{`${trailer.site}: ${trailer.name}`}</Text>
            <WebView
                style={{ height: 185, width: '100%' }}
                javaScriptEnabled
                source={{ uri: trailer.url }}
            />
        </View>
    ));
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={[defaultStyles.container, { paddingHorizontal: 15 }]}>
                <View style={styles.movieWrapper}>
                    <View style={[styles.moviePoster, { overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }]}>
                        <Image
                            style={[styles.moviePoster, { width: imageWidth, height: imageHeight }]}
                            resizeMode="cover"
                            source={{ uri: movie.poster }}
                        />
                    </View>
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
                    <View style={{ paddingBottom: 15 }}>
                        {trailers}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

UpcomingMovieDetailScreen.propTypes = {
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

export default connect(mapStateToProps)(UpcomingMovieDetailScreen);
