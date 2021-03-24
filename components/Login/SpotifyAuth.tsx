export const authEndpoint = process.env.SPOTIFY_AUTHORIZE_URL;

const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

const clientId = process.env.SPOTIFY_CLIENT_ID;

const scopes = [
  "user-modify-playback-state",
  "user-read-playback-position",
  "user-read-private",
  "streaming",
  "user-read-currently-playing",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
