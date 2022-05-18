import { HomePage } from "../screens/HomePage";
import { Routes, Route } from "react-router-dom";
import { HomePageDetails } from "../screens/homepage/HomePageDetails";

export const MyRoutes = ({ characters, isLoading }) => {
  return (
    <Routes>
      <Route index element={<HomePage isLoading={isLoading} characters={characters} />} />
      <Route path="/" element={<HomePage isLoading={isLoading} characters={characters} />} />
      <Route path=":id" element={<HomePageDetails />} />
      <Route path="*" element={<p>No Matched Location!</p>} />
    </Routes>
  );
};
