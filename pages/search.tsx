import { useState } from "react";
import Logo from "../components/Logo/Logo";
import SearchEpisode from "../components/SearchEpisode/SearchEpisode";
import { useSpotify } from "../contexts/SpotifyContext";

import styles from "../styles/Home.module.css";

function SearchPage() {
  const spotify = useSpotify();
  const [
    searchResult,
    setSearchResult,
  ] = useState<SpotifyApi.EpisodeSearchResponse>(null);

  return (
    <main className={styles.main}>
      <Logo size="small"></Logo>
      <SearchEpisode></SearchEpisode>
      <button
        onClick={() => spotify.searchEpisodes("Spiegel").then(setSearchResult)}
      >
        Search now!
      </button>
      <ul>
        {searchResult?.episodes.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default SearchPage;
