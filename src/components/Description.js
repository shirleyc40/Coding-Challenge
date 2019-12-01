import React from 'react';
import Desitem from './Desitem'
import PropTypes from 'prop-types';

class Description extends React.Component {
    render() {
        return this.props.videos.map(video => (
            <Desitem key={video.id} video={video} />
        ));
    }

}
Description.propTypes = {
    videos: PropTypes.array.isRequired
}
export default Description;
