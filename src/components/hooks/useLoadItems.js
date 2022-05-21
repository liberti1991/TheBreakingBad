import axios from "axios";
import { useEffect, useState } from "react";

export const useLoadItems = (url, itemsPerPage) => {
  const [AllItems, setAllItems] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const itemsToBeRendered = response.data.slice(page, itemsPerPage);
        setItems(itemsToBeRendered);
        setAllItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => error);
      // eslint-disable-next-line
  }, []);

  const loadMore = () => {
    const nextPage = page + itemsPerPage;
    const nextItems = AllItems.slice(nextPage, nextPage + itemsPerPage);
    setItems((previusItems) => [...previusItems, ...nextItems]);
    setPage(nextPage);
  };

  return {
    items,
    AllItems,
    loadMore,
    isLoading,
    showButton: page + itemsPerPage >= AllItems.length,
  };
};
