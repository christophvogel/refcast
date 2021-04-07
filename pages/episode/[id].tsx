import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EpisodeInfo from "../../components/EpisodeInfo/EpisodeInfo";
import ReferenceList from "../../components/ReferenceList/ReferenceList";
import { useSpotify } from "../../contexts/SpotifyContext";
import { PodcastEntry } from "../../server/db";
import styles from "../../components/ReferenceList/ReferenceList.module.css";

function EpisodePage() {
  const spotify = useSpotify();
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];

  const [episode, setEpisode] = useState<SpotifyApi.SingleEpisodeResponse>(
    null
  );

  const [episodeReferences, setEpisodeReferences] = useState<PodcastEntry>(
    null
  );

  useEffect(() => {
    spotify.getEpisode(id).then((newEpisode) => {
      setEpisode(newEpisode);
    });
    fetch(`/api/episode/${id}`)
      .then((result) => result.json())
      .then(setEpisodeReferences);
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EpisodeInfo episodeName={episode.name} imgSrc={episode.images[1]?.url} />
      {!episodeReferences?.references.length ? (
        <ReferenceList
          refTopic="Add reference via + button."
          timeCode="__:__"
        />
      ) : (
        <div className={styles.container}>
          <div
            onClick={() => {
              router.push(`/add/${id}`);
            }}
            className={styles.addbtn}
          >
            <img src="/addbtn.svg" />
          </div>
          {episodeReferences.references.map((reference) => (
            <div key={reference.timecode}>
              <div className={styles.item}>
                <div className={styles.time}>{reference.timecode}</div>
                <div
                  className={styles.topic}
                  onClick={() => {
                    window.open(
                      `http://www.google.com/search?q=${reference.name}`,
                      "_blank"
                    );
                  }}
                >
                  {reference.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default EpisodePage;
