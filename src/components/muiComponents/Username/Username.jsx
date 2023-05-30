import { Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";

import AlertErrorMessage from "../../AlertErrorMessage/AlertErrorMessage";

export default function Username({ control, errors }) {
  
  return (
    <div style={{ marginTop: "16px" }}>
      <Controller
        name="username"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Username is required",
          },
          maxLength:{value:12, message: "Username is to long (max 12 characters)"},
          pattern:{
            value: /^[a-zA-Z0-9_]*$/,
          message: "Username is invalid"
          }

        }}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            id="username"
            placeholder="username"
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
      <div className="alert-error-message">
        <AlertErrorMessage errorKey={"username"} errors={errors} />
      </div>
    </div>
  );
}
