import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EpisodeInfo from "../../components/EpisodeInfo/EpisodeInfo";
import ReferenceList from "../../components/ReferenceList/ReferenceList";
import { useSpotify } from "../../contexts/SpotifyContext";

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

  useEffect(() => {
    spotify.getEpisode(id).then((newEpisode) => {
      setEpisode(newEpisode);
    });
  }, [id]);

  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EpisodeInfo episodeName={episode.name} imgSrc={episode.images[1]?.url} />
      <ReferenceList refTopic="Lorem Ipsum" timeCode="35:14" />
    </div>
  );
}
export default EpisodePage;
