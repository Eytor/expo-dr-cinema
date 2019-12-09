import React, { Component } from 'react';
import {
    ScrollView, Dimensions, View, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getUpcomingMovies } from '../../service/services';
import UpcomingMovie from '../../components/UpcomingMovie/UpcomingMovie';
import defaultStyles from '../../resources/defaultStyles';
import { setUpcomingMovie } from '../../actions/movieActions';

class UpcomingMovies extends Component {
    constructor(props) {
        super(props);
        this.selectMovie = this.selectMovie.bind(this);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        getUpcomingMovies(this.props.token).then((movies) => this.setState({
            movies: movies.sort((a, b) => new Date(b['release-dateIS']) - new Date(a['release-dateIS'])),
        }));
    }

    selectMovie(id, name, poster, plot, trailers) {
        this.props.setUpcomingMovie(id, name, poster, plot, trailers);
        this.props.navigation.navigate('UpcomingMovieDetails', { title: name });
    }


    render() {
        const dimensions = Dimensions.get('window');
        const imageHeight = ((dimensions.width - 30) * 10) / 6.75;
        const imageWidth = (dimensions.width - 30);
        const movieList = this.state.movies.map((movie) => (
            <UpcomingMovie
                key={movie.id}
                selectMovie={this.selectMovie}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                movie={movie}
            />
        ));
        return (
            <View style={[defaultStyles.container, movieList.length === 0 && ({ justifyContent: 'center', alignItems: 'center' })]}>
                {
                    movieList.length > 0 ? (
                        <ScrollView>
                            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                                {movieList}
                            </View>
                        </ScrollView>
                    ) : (
                        <ActivityIndicator size="large" color="#383B53" />
                    )
                }
            </View>
        );
    }
}

UpcomingMovies.propTypes = {
    token: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    setUpcomingMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({ token }) => ({
    token,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    { setUpcomingMovie },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies);
