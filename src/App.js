import React from 'react';
import Description from './components/Description';
import Cara from './components/Carousels';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  state = {
    videos: [
      {
        id: 1,
        title: 'Princess Monoke',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'Princess.jpg',
        align: 'left'
      },
      {
        id: 2,
        title: 'Spirited Away',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'spritedaway.jpg',
        align: 'right'
      },
      {
        id: 3,
        title: "Howl's Moving Castle",
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'howl.jpg',
        align: 'left'
      }
    ],
    movies: [
      {
        id: 1,
        title: 'Totoro',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'totoro.jpg'
      },
      {
        id: 2,
        title: 'Arrietty',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'arrietty.jpg'
      },
      {
        id: 3,
        title: "KiKi's Delivery Service ",
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'kiki.jpg'
      },
      {
        id: 4,
        title: 'Ponyo',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'ponyo.jpg'
      },
      {
        id: 5,
        title: 'Your Name',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        image: 'yourname.png'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Cara movies={this.state.movies} />
        <Description
          videos={this.state.videos}
        />

      </div>
    );
  }

}

export default App;
