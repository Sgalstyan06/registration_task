import TextField from "@mui/material/TextField";

import { Controller } from "react-hook-form";

import { validationRules } from "../../constants/validation";

export default function Input({ control, type }) {

  return (
    
    <Controller
      name={type}
      control={control}
      rules={validationRules[type]}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          id={type}
          placeholder={type}
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
        />
      )}
    />
  );
}
