import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ContactMePage from "../pages/ContactMePage";
import { home, about, skills, contact } from "./path.json";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path={home} element={<HomePage />} />
        <Route path={about} element={<AboutPage />} />
        <Route path={skills} element={<SkillsPage />} />
        <Route path={contact} element={<ContactMePage />} />
      </Routes>
    </>
  );
};

export default Layout;
