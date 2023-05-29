import { Controller } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



export default function SelectAge({ label, options, control, errors, currentYear }) {
  
  return (
    <>
      <FormControl
        sx={{
          ".MuiOutlinedInput-notchedOutline": {
            border: "1px solid #F76448",
            borderRadius: "16px",
            height: "48px",
          },
          ".MuiSelect-select": {
            padding: "10px 0 10px 24px",
            fontFamily: "Public Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            color: "#212B36",
          },
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            left: "5px",
            top: "-7px",
            fontFamily: "Public Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            color: "#212B36",
            transformOrigin: "-20px 25px",
          }}
        >
          {label}
        </InputLabel>
        <Controller
          name={label}
          control={control}
          rules={{
            required: {
              value: true,
              message: `please select your birtday ${label}`
            },
            max: label === "year" ? {
              value: currentYear - 18,
              message: "You must be at least 18 years old to use Intim Flort"
            }: {}
          }}
          render={({ field }) => (
            <Select
              placeholder="year"
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 150,
                  },
                },
              }}
              {...field}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={label}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </>
  );
}
