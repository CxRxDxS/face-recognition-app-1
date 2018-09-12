import React, { Component } from 'react';
import Navigation from './Components/NavigationComp/Navigation';
import FaceRecocgnition from './Components/FaceRecocgnition/FaceRecocgnition';
import Logo from './Components/LogoComp/Logo';
import SignIn from './Components/SignIn/SignIn';
import Clarifai from 'clarifai';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Register from './Components/Register/Register';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
 apiKey: '102b2943b8a6418fb27437e4cd854199'
});


const particleOptions={
                particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                }
                }
              }

  

class App extends Component {
 constructor(){
  super();
  this.state = {
    input: '',
    imageUrl: '',
    box:{},
    route: 'signin',
    signedIn: false,
  }
 }

 // lameFunction = () =>{
 //  console.log('hello');
 // }


  calFace = (data) =>{
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiData.left_col * width,
      topRow: clarifaiData.top_row * height,
      rightCol: width - (clarifaiData.right_col * width),
      bottomRow: height - (clarifaiData.bottom_row * height)
    }
 }

 displayFaceBox = (box) => {
  this.setState({box: box});
 }
 //event is what occurs when something is changed
 onInput = (event) => {
  this.setState({input: event.target.value});
 }

 onSubmit = () => {
  this.setState({imageUrl: this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calFace(response)))
      .catch(err => console.log(err));
 }

 onRouteChange = (route) =>{
  this.setState({route: route});
 }

 signedIn = (signedIn) => {
  this.setState({signedIn: signedIn});
 }


  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
          <Navigation 
          signedIn={this.state.signedIn}
          onRouteChange={this.onRouteChange} />
        { this.state.route === 'home'
          ? <div>
          <Logo />
          <Rank />
          <ImageLinkForm 
          onInput={this.onInput} 
          onSubmit={this.onSubmit} />
          <FaceRecocgnition imageUrl={this.state.imageUrl} box={this.state.box} />
          </div>
          :(
            this.state.route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} signedIn={this.signedIn} />
            : <Register onRouteChange={this.onRouteChange} />
            )
        } 
      </div>
    );
  }
}

export default App;
