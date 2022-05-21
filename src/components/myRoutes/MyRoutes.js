import { Routes, Route } from "react-router-dom";

import { HomePage } from "../screens/HomePage";
import { HomePageDetails } from "../screens/homepage/HomePageDetails";

export const MyRoutes = ({ characters, loadMore, showButton, AllItems }) => {
  return (
    <Routes>
      <Route index element={<HomePage characters={characters} loadMore={loadMore} showButton={showButton} AllItems={AllItems}/>} />
      <Route path=":id" element={<HomePageDetails />} />
      <Route path="*" element={<p>No Matched Location!</p>} />
    </Routes>
  );
};
