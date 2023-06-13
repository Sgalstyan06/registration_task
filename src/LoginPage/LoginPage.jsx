import { useState } from "react";

import { Provider } from "react-translated";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

import translation from "../services/translation";

export default function LoginPage() {
  const [language, setLanguage] = useState("en");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Provider language={language} translation={translation}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        onChange={handleChange}
        sx={{position: "absolute", top: "10px", right: "20px"}}
      >
        <MenuItem value={"en"}>English</MenuItem>
        <MenuItem value={"fr"}>France</MenuItem>
        <MenuItem value={"de"}>German</MenuItem>
      </Select>
      <Main />
      <Footer />
    </Provider>
  );
}
