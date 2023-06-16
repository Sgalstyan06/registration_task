import { Controller } from "react-hook-form";

import AlertErrorMessage from "../AlertErrorMessage/AlertErrorMessage";

import "./CheckBox.css";

export default function CheckBox({
  label,
  control,
  errorMessage,
  errors,
  name,
}) {
  return (
    <>
      <label className="check-box-label">
        {label}
        <Controller
          name={name}
          control={control}
          rules={{ required: errorMessage }}
          render={({ field: { onChange } }) => (
            <input type="checkbox" onChange={onChange} />
          )}
        />
        <span className="checkmark"></span>
        <AlertErrorMessage errorKey={name} errors={errors} />
      </label>
    </>
  );
}
