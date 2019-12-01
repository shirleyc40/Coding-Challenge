import React, { Component } from 'react'
import '../styles/Desitem.css'
import PropTypes from 'prop-types';
class Desitem extends Component {
    render() {
        return (
            <div className={this.props.video.id === 1 ? 'first' : this.props.video.align}>
                <div className={"details" + this.props.video.align}><h2>{this.props.video.title}</h2>
                    <p>{this.props.video.text}</p></div>
                <img src={require(`../assets/${this.props.video.image}`)}
                    alt={this.props.video.title}
                    className={"image" + this.props.video.align}
                ></img>

            </div>
        )
    }
}
Desitem.propTypes = {
    video: PropTypes.object.isRequired
}
export default Desitem
