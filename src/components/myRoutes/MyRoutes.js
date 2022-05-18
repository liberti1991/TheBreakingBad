import { HomePage } from "../screens/HomePage";
import { Routes, Route } from "react-router-dom";
import { HomePageDetails } from "../screens/homepage/HomePageDetails";


export const MyRoutes = ({characters}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage characters={characters} />} />
      <Route path="/:id" element={<HomePageDetails characters={characters} />} />
    </Routes>
  );
};