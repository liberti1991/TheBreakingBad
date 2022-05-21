import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const useDetails = (url) => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

  return {
    character,
    isLoading,
  };
};
