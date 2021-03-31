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
    <div className={styles.search_container}>
      <div className={styles.search}>
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

      <div className={styles.sugg_container}>
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
      </div>
    </div>
  );
}

export default SearchEpisode;
