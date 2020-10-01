import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import getPodcasts from '../server/podcastFetch.js';
import RSSfeeds from '../assets/rss';

// import Podcast from './Podcast.jsx';
// import TrueAnonImage from '../public/trueanon.png';
// import YBS from '../public/ybs.png';
// import ChapoImage from '../public/chapo.png';

export default function Home() {
  const [podcasts, setPodcasts] = useState();

  useEffect(() => {
    retrievePodcasts();
  });

  const retrievePodcasts = async () => {
    try {
      const res = await getPodcasts(RSSfeeds);
      setPodcasts(res);
    } catch (e) {
      console.log(e);
    } finally {
      console.log('hnere', podcasts);
    }
  };

  function enforceImage(title) {
    if (title === 'TrueAnon') {
      return TrueAnonImage;
    }
    if (title === 'Chapo Trap House') {
      return ChapoImage;
    }
    return YBS;
  }

  function player(url) {
    const { isPlaying, podcastURL } = this.state;

    // create proxy url => maybe need to rework as HTML5 doesn't work with this
    const CORS_PROXY =
      'https://cors-anywhere.herokuapp.com/';
    const concatenatedURL = CORS_PROXY + url;

    // check if the passed in URL is the same as the current (so this would be play)
    const alreadyPlaying =
      podcastURL === concatenatedURL;

    if (!isPlaying && podcastURL === '') {
      // nothing has played yet and there is no link
      this.setState({
        isPlaying: true,
        podcastURL: concatenatedURL,
      });
    } else if (isPlaying && alreadyPlaying) {
      // playing and already been clicked (pause)
      this.setState({
        isPlaying: false,
      });
    } else if (!isPlaying && alreadyPlaying) {
      // isn't playing and same url
      this.setState({
        isPlaying: true,
      });
    } else if (!isPlaying && !alreadyPlaying) {
      // isn't playing and new URL
      this.setState({
        isPlaying: false,
        podcastURL: concatenatedURL,
      });
    }
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello</div>

      <>
        <OpenCard>Hello</OpenCard>
        {/* <ReactHowler
          src={[podcastURL]}
          playing={isPlaying}
          // html5
        /> */}
        <OpenCard>
          {/* <Typography> */}
          shhh... don&apos;t tell anyone....
          {/* </Typography> */}
          {/* <Loading /> */}
        </OpenCard>
        {/* <Podcast
          podcasts={podcasts}
          player={this.player}
          isPlaying={isPlaying}
        /> */}
      </>
    </div>
  );
}

const OpenCard = styled.div`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 20vh;
  text-align: center;
  padding-top: 5vh;
  font-size: 1.5em;
  padding-bottom: 10vh;
  border: solid black 1px;
  box-shadow: 5px 10px #888888;
`;

// const Loading = styled(CircularProgress)`
//   margin-top: 20vh;
//   color: black;
// `;

// title: "Episode 63: Exiled on Main Street"
// link: "https://www.patreon.com/posts/episode-63-on-36359715"
// pubDate: "Fri, 24 Apr 2020 19:05:28 GMT"
// enclosure: {url: "https://c10.patreonusercontent.com/3/eyJhIjoxLCJwI…sh=B1APP72M_ZzWg6u_OOKaLqdjS5pP6w3mLAuNoYOihMQ%3D", length: "85665776", type: "audio/mpeg"}
// content: "<p>TrueAnon is joined by Mark Ames of the War Nerd and Exiled to talk social collapse,
// Russiagate, Shock Therapy and Comrade Putin</p>"
// contentSnippet: "TrueAnon is joined by Mark Ames of the War
// Nerd and Exiled to talk social collapse, Russiagate, Shock Therapy and Comrade Putin"
// guid: "36359715"
// isoDate: "2020-04-24T19:05:28.000Z"
// itunes:
