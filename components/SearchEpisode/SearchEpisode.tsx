import { useEffect, useState } from "react";
import { useSpotify } from "../../contexts/SpotifyContext";
import styles from "./SearchEpisode.module.css";

function SearchEpisode() {
  const spotify = useSpotify();
  const [
    searchResult,
    setSearchResult,
  ] = useState<SpotifyApi.EpisodeSearchResponse>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!search) {
      return;
    }
    const timeoutId = setTimeout(() => {
      spotify.searchEpisodes(search).then(setSearchResult);
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.loupe}>
          <img src="/search.svg" className={styles.searchicon} />
        </div>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Podcast"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <ul>
        {searchResult?.episodes.items.map((item) => (
          <li className={styles.sugg} key={item.id}>
            <img
              className={styles.epipic}
              src={item.images[2]?.url}
              alt={item.name}
            />
            <div className={styles.epiname}>{item.name}</div>
            <div className={styles.epidate}>{item.release_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchEpisode;
