import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EpisodeInfo from "../../components/EpisodeInfo/EpisodeInfo";
import ReferenceList from "../../components/ReferenceList/ReferenceList";
import { useSpotify } from "../../contexts/SpotifyContext";
import { PodcastEntry } from "../../server/db";

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
        episodeReferences.references.map((reference) => (
          <ReferenceList
            key={reference.timecode}
            refTopic={reference.name}
            timeCode={reference.timecode}
          />
        ))
      )}
    </div>
  );
}
export default EpisodePage;
