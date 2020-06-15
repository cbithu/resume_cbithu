import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      xMain: 0,
      yMain: 0,
      xTrailing: 0,
      yTrailing: 0,
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  handleMouseMove = (e) => {
    // Using pageX and pageY will cause glitching when you scroll the window down
    // because it measures the distance from the top left rendered corner, not
    // top left visible corner
    const { clientX, clientY } = e;

    // we set the main circle coordinates as soon as the mouse is moved
    this.setState({
      xMain: clientX,
      yMain: clientY,
    }, () => {
      // this callback is invoked after the first setState finishes
      // 
      // here we schedule saving the trailing coordinates in state 100ms  
      // after the main coordinates have been set to simulate the trailing
      setTimeout(() => {
        this.setState({
          xTrailing: clientX,
          yTrailing: clientY,
        })
      }, 100);
    })
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    // we retrieve coordinates from state
    const {
      xMain,
      yMain,
      xTrailing,
      yTrailing
    } = this.state;
    return (
      <div className="App">
        <div
          className='container'
          onMouseMove={e => this.handleMouseMove(e)}
        >
          <div className='cursors'>
            <div
              className='cursor'
              style={{
                left: xMain,
                top: yMain,
              }}
            />

            <div
              className='cursor'
              style={{
                left: xTrailing,
                top: yTrailing,
              }}
            />
            <Header data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            <Portfolio data={this.state.resumeData.portfolio} />
            <Testimonials data={this.state.resumeData.testimonials} />
            <Contact data={this.state.resumeData.main} />
            <Footer data={this.state.resumeData.main} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
