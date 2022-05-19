import { HomePage } from "../screens/HomePage";
import { Routes, Route } from "react-router-dom";
import { HomePageDetails } from "../screens/homepage/HomePageDetails";

export const MyRoutes = ({ characters }) => {
  return (
    <Routes>
      <Route index element={<HomePage characters={characters} />} />
      <Route path="/" element={<HomePage characters={characters} />} />
      <Route path=":id" element={<HomePageDetails />} />
      <Route path="*" element={<p>No Matched Location!</p>} />
    </Routes>
  );
};
