import React from 'react';
import Slide from './Slide';
import '../../styles/carousel.css'
import Carousel from 'react-bootstrap/Carousel'


class Cara extends React.Component {
    render() {
        return (
            <div>
                <Carousel interval={null}>
                    {this.props.movies.map(movie =>
                        <Carousel.Item className='item'>
                            <Slide movie={movie} />
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>

        )
    }
}
export default Cara;


/* NOTE: This was my initial implementation of the Carousel but I couldn't figure out how to get the slide transition
so I decided to use bootstrap instead. Everthing below works besides the slide effect
import Arrow from './Arrow';
Before the render()
constructor(props) {
    super(props);

    this.state = {
        currentIndex: 0,
        movie: this.props.movies[0],
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
}
previousSlide() {
    const lastIndex = this.props.movies.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === 0;
    const i = resetIndex ? lastIndex : currentIndex - 1;

    this.setState({
        currentIndex: i,
        movie: this.props.movies[i]
    });
}
nextSlide() {
    const lastIndex = this.props.movies.length;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === lastIndex - 1;
    const i = resetIndex ? 0 : currentIndex + 1;

    this.setState({
        currentIndex: i,
        movie: this.props.movies[i]
    });
}
Before return ()
const style = {
    display: 'flex',
    alignItems: 'center',
}
in return
        <div className='Carousel' style={style}>
            <Arrow direction="left" clickFunction={this.previousSlide}
                glyph="&#10092;" />

            <Slide movie={this.state.movie} />
            <Arrow direction="right" clickFunction={this.nextSlide}
                glyph="&#10093;" />

        </div>
    */

