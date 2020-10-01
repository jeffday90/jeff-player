/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import React, { useState } from 'react';
import styled from 'styled-components';
import Episodes from './Episodes.jsx';

function PodcastEntry({ podcasts, player }) {
  const [isPlaying, setIsPlaying] = useState(
    false
  );

  // function handleClick(link) {
  //     const { player } = this.props;
  //     const { isPlaying } = this.state;

  //     player(link);

  //     if (!isPlaying) {
  //       this.setState({
  //         isPlaying: true,
  //       });
  //     } else {
  //       this.setState({
  //         isPlaying: false,
  //       });
  //     }
  //   }

  return (
    <PodcastCard>
      {/* // className={classes.root}> */}
      <CardContent>
        <TitleContainer>
          <img
            style={imageStyle}
            src={podcast.image}
          />
          <Title>{podcast.title}</Title>
          {/* </Typography> color="primary" className={classes.title} variant="h5"> */}
          <PlayPauseButton
            onClick={() =>
              this.handleClick(
                podcast.episodes[0].enclosure.url
              )
            }
          >
            {!isPlaying && <PlayArrowIcon />}
            {isPlaying && <PauseIcon />}
          </PlayPauseButton>
        </TitleContainer>
        <EpisodesContainer
          style={{
            maxHeight: 500,
            overflow: 'auto',
          }}
        >
          <Episodes
            episodes={podcast.episodes}
            player={player}
          />
        </EpisodesContainer>
      </CardContent>
    </PodcastCard>
  );
}

//     // <Grid
//     //   container
//     //   spacing={0}
//     //   direction="row"
//     //   alignItems="center"
//     //   style={{ minHeight: '100vh' }}
//     // >
//
//     // </Grid>
//     );
// }

const imageStyle = {
  height: '12vh',
  width: '12vh',
  display: 'inline-block',
};

const PodcastCard = styled.div`
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 2em;
`;

// need space between border and title/button
const TitleContainer = styled.div`
  margin-left: 2vh;
  margin-right: 2vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.7em;
  justify-content: center;
  align-items: center;
  display: inline-block;
`;

const EpisodesContainer = styled.div`
  margin-top: 1em;
  /* overflow: 'auto'; */
  border: 2px solid black;
`;

const PlayPauseButton = styled.div`
  /* float: right; */
  /* margin-top: 10vh; */
  display: inline-block;
`;

export default PodcastEntry;
