import { Controller } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Translate } from "react-translated";

import { validationRules } from "../../constants/validation";

const makeStyle = {
  fontFamily: "Public Sans",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "26px",
  color: "#212B36",
};

export default function SelectAge({ label, options, control}) {
  
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
            ...makeStyle,
          },
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            left: "3px",
            top: "-7px",
            ...makeStyle,
            transformOrigin: "-20px 25px",
          }}
        >
          <Translate text={label} />
        </InputLabel>
        <Controller
          name={label}
          control={control}
          rules={validationRules.dob}
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
              label={<Translate text={label} />}
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

