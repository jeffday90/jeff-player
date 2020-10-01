const Parser = require('rss-parser');

const sortedStreamsPodcasts = [];
const parser = new Parser();

const CORS_PROXY =
  'https://cors-anywhere.herokuapp.com/';

// need to work on this method to ensure that there are no duplicates etc... but it works
const getPodcasts = (podcasts) => {
  podcasts.forEach((podcast) => {
    const links = [];
    const episodes = [];
    let totalEpisodes = 0;

    const patreon = podcast.patreon_RSS;
    const free = podcast.free_RSS;
    links.push(patreon);
    links.push(free);

    links.forEach((link) => {
      (async () => {
        parser.parseURL(
          CORS_PROXY + link,
          (err, feed) => {
            if (err) throw err;
            feed.items.forEach((entry) => {
              episodes.push(entry);
            });
            // TODO: refactor
            totalEpisodes += 1;
            if (totalEpisodes === 2) {
              episodes.sort(
                (a, b) =>
                  Date.parse(b.pubDate) -
                  Date.parse(a.pubDate)
              );
              const podcastInfo = {
                id: podcast.id,
                title: podcast.title,
                episodes,
              };
              sortedStreamsPodcasts.push(
                podcastInfo
              );
            }
          }
        );
      })();
    });
  });
  return sortedStreamsPodcasts;
};

export default getPodcasts;
