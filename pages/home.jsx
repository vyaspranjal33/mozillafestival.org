import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NotificationBar from '../components/notification-bar.jsx';
import Jumbotron from '../components/jumbotron.jsx';
import SpeakersPromo from '../components/speakers-promo.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoTakeover: false
    };
  }

  handlePlayVideoClick() {
    this.setState({
      videoTakeover: !this.state.videoTakeover
    }, () => {
      document.body.classList.toggle(`no-scroll`, this.state.videoTakeover);
    });
  }

  renderVideoTakeover() {
    if (!this.state.videoTakeover) return null;

    return <div className="video-screen-takeover">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <div>
          <button className="close mb-4" onClick={() => this.handlePlayVideoClick()}></button>
        </div>
        <iframe src="https://player.vimeo.com/video/258268373?color=ffffff&title=0&byline=0&portrait=0" width="100%" frameBorder="0" allowFullScreen className="mozfest-vimeo"></iframe>
      </div>
    </div>;
  }

  render() {
    return (
      <div className={classNames({"has-video-takeover": this.state.videoTakeover}, `home-page`)}>
        <NotificationBar to="/schedule">
          <div><span className="emphasized">The MozFest 2018 schedule is now live!</span> <span className="light">View it here.</span></div>
        </NotificationBar>
        <Jumbotron className="home-jumbotron"
          image=""
          image2x=""
          videoJumbotron={true}
          toggleVideoTakeover={() => this.handlePlayVideoClick()}
        >
          <h1 className="highlight">Where Web Meets World</h1>
          <p className="mb-0">A seven day celebration for, by, and about people who love the internet, showcasing world-changing ideas and technology through workshops, talks, and interactive sessions.</p>
        </Jumbotron>
        <div className="white-background shift-up">
          <div className="content wide centered shift-up pt-4">
            <h1>Mozilla Festival (MozFest) 2018, London</h1>
            <p>MozFest House, October 22-26, <a href="https://www.google.com/maps/place/RSA+House/@51.5093702,-0.1248943,17z/data=!3m1!4b1!4m5!3m4!1s0x487604c9572d71f1:0xc61aaa0727953544!8m2!3d51.5093669!4d-0.1227056" target="_blank">RSA</a>, Central London</p>
            <p>MozFest Weekend, October 26-28, <a href="https://www.google.com/maps/place/Ravensbourne+University+London/@51.5016761,0.0035609,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a81c7b6dfe23:0xc31e4c0ca6a4ace2!8m2!3d51.5016728!4d0.0057496" target="_blank">Ravensbourne University</a>, Greenwich</p>
            <hr className="mt-5 mb-4" />
            <div>
              <img src="/assets/images/mozilla-festival_website-theme-update.svg" width="250" className="my-4" />
              <h1>Your Data and You</h1>
              <p>This year at Mozilla Festival, dive into our theme “Your Data and You,” through interactive sessions, art, games, dialogues, debates, and the latest tech. We’ll explore the risks and benefits, the implications for the health of the Internet, and how we can take control of our data, our online lives, and our collective future.</p>
            </div>
            <hr className="mt-5 mb-4" />
            <SpeakersPromo />
          </div>
        </div>
        <div className="light-grey-bg">
          <div className="centered content wide pt-4">
            <h1>Join Us at MozFest</h1>
            <p>Get your ticket for MozFest weekend.</p>
            <Link to="/tickets" className="btn btn-arrow"><span>Buy Tickets</span></Link>
          </div>
        </div>
        { this.renderVideoTakeover() }
      </div>
    );
  }
}

export default Home;
