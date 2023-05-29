import * as React from "react";

import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import { Controller } from "react-hook-form";

import AlertErrorMessage from "../AlertErrorMessage/AlertErrorMessage";

const selectGenderStyle = {
  borderRadius: "16px",
  width: "100%",
  height: "48px",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
  fontFamily: "Public Sans",
  fontStyle: "normal",
  fontSeight: "500",
  fontSize: "18px",
  lineHeight: "26px",
};

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  ".MuiFormControlLabel-label": checked
    ? {
        border: `1px solid #F76448`,
        color: "#F76448",
        ...selectGenderStyle,
      }
    : {
        border: `1px solid #B2B3B5`,
        color: "#B2B3B5",
        ...selectGenderStyle,
      },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}
export default function SelectGender({
  control,
  name_props,
  errors,
  }) {

  return (
    <>
      <RadioGroup name="use-radio-group" sx={{ margin: "16px 0 24px" }}>
        <Controller
          name={name_props}
          control={control}
          rules={{
            required: {
              value: true,
              message: `Please select your ${name_props}`,
            },
          }}
          render={( {field} ) => (
            <MyFormControlLabel
              {...field}
              value="Female"
              label="Female"
              control={<Radio />}
              sx={{
                margin: 0,

                ".MuiButtonBase-root": {
                  display: "none",
                },
                ".MuiTypography-root": {
                  marginBottom: "16px",
                },
              }}
            />
          )
          }
        />
        <Controller
          name={name_props}
          control={control}
          rules={{
            required: {
              value: true,
              message: `Please select who are you ${name_props}`,
            },
          }}
          render={({ field }) => (
            <MyFormControlLabel
              {...field}
              value="Male"
              label="Male"
              control={<Radio />}
              sx={{
                margin: 0,
                ".MuiButtonBase-root": {
                  display: "none",
                },
                ".MuiTypography-root": {
                  margin: 0,
                },
              }}
            />
          )}
        />
      </RadioGroup>
      <div style={{ position: "relative", top: "-15px" }}>
        <AlertErrorMessage errors={errors} errorKey={name_props} />
      </div>
    </>
  );
}
