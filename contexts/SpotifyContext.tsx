import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./SpotifyAuth";

const SpotifyContext = createContext<SpotifyWebApi.SpotifyWebApiJs>(null);
type SpotifyProviderProps = {
  children: ReactNode;
};
export function SpotifyProvider({ children }: SpotifyProviderProps) {
  const [spotify, setSpotify] = useState<SpotifyWebApi.SpotifyWebApiJs>(null);
  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromUrl();
    if (token) {
      const newSpotify = new SpotifyWebApi();
      newSpotify.setAccessToken(token);
      setSpotify(newSpotify);
      router.push("/search");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <SpotifyContext.Provider value={spotify}>
      {children}
    </SpotifyContext.Provider>
  );
}

export const useSpotify = () => useContext(SpotifyContext);
