import { useEffect, useState } from "react";

import { Controller } from "react-hook-form";

import { InputAdornment, TextField } from "@mui/material";

import { getLocation } from "../../services/httpRequest";

import search_icon from "../../images/icons/searc_icon.png";
import AlertErrorMessage from "../AlertErrorMessage/AlertErrorMessage";

import "./UserLocation.css";

import { validationRules } from "../../constants/validation";

export default function UserLocation({ control, setValue, errors }) {
  const [selectLocation, setSelectLocation] = useState([]);
  const [showLocationList, setShowLocationList] = useState("hide");
  const [locationValue, setLocationValue] = useState("");

  useEffect(() => {

    let id;

    if (locationValue !== "") {

      try {
        id = setTimeout(() => {

          const res = getLocation(locationValue);

          res.then((response) => {
            setSelectLocation(response.Data);
            setShowLocationList("show");
          });

        }, 400);
      } catch (e) {
        
        throw new Error(e);
      }
    } else {
      setShowLocationList("hide");
    }

    return () => clearInterval(id);
  }, [locationValue]);

  function selectLocationFromList(e) {
    setValue("location", e.target.innerHTML);
    setShowLocationList("hide");
  }

  function handleChange(e) {
    setLocationValue(e.target.value);
  }

  return (
    <div className="location-wrapper">
      <Controller
        name="location"
        control={control}
        rules={validationRules.location}
        render={({ field }) => {
          const { name, onChange, ref, value } = field;
          return (
            <TextField
              {...field}
              name={name}
              value={value}
              onChange={(e) => {
                onChange(e);
                handleChange(e);
              }}
              ref={ref}
              fullWidth
              id="lacation"
              placeholder="London, UK"
              type="text"
              sx={{
                ".MuiInputBase-input": {
                  padding: "10px 0 10px 24px",
                  fontFamily: "Public Sans",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#212B36",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #F76448",
                  borderRadius: "16px",
                  height: "48px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={search_icon} alt="find location" />
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
      />
      
      <ul className={`location-list ${showLocationList}`}>
        {selectLocation?.map((location) => (
          <li key={location} onClick={selectLocationFromList} value={location}>
            {location}
          </li>
        ))}
      </ul>
      <AlertErrorMessage errors={errors} errorKey={"location"} />
    </div>
  );
}
