import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (id) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://www.breakingbadapi.com/api/characters/";

  useEffect(() => {
    if (!id) {
      axios.get(url).then((response) => {
        const { data } = response;
        setCharacters(data);
        setIsLoading(false);
      });
      return;
    }

    if (!Number(id)) {
      setIsLoading(false);
      return;
    }

    axios
      .get(url + id)
      .then((response) => {
        const { data } = response;
        if (data.length > 0) {
          setCharacter(...data);
        }
      })
      .then(() => setIsLoading(false));
      // eslint-disable-next-line
  }, []);
  return { characters, character, isLoading };
};
