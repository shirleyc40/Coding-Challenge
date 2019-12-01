import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/slide.css'
import play from '../assets/play.png'

class Slide extends React.Component {
    render() {
        console.log(this.props.movie)
        return (
            <div className='slide'>
                <img src={require(`../assets/${this.props.movie.image}`)} alt={this.props.movie.title} className="image"></img>
                <div className='details'>
                    <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.text}</p>
                </div>
                <div className='button'>
                    <Button variant="primary"><img src={play} alt='play' className='icon' /> Buy Now</Button>
                    <Button variant="outline-dark" >Watch Trailer</Button></div>
            </div>
        )
    }
}
export default Slide;