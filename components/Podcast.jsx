import React from 'react';
import PodcastEntry from './PodcastEntry.jsx';

export default Podcast({ podcasts, player })(
  <div>
    {podcasts.map((podcast) => (
      <PodcastEntry
        key={podcast.id}
        podcast={podcast}
        player={player}
      />
    ))}
  </div>
);
