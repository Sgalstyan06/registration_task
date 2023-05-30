import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

import { Controller } from "react-hook-form";

import AlertErrorMessage from "../../AlertErrorMessage/AlertErrorMessage";

export default function UserPassword({ control, errors }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <Controller
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: "password is required",
          },
          minLength: { value: 6, message: "Password is too short (min 6 characters)" },
          maxLength: {
            value: 16,
            message: "Password is too long (max 16 characters)"
          },
          pattern: {
            value: /[0-9].*/,
            message: "Password is invalid"
          }
        }}
        render={({ field }) => (
          <FormControl fullWidth>
            <OutlinedInput
              id="password"
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
              {...field}
              placeholder="Password"
              type="password"
            />
          </FormControl>
        )}
      />

      <AlertErrorMessage errors={errors} errorKey={"password"} />
    </div>
  );
}
