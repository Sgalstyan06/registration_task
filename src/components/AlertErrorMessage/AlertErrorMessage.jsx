import { Translate } from "react-translated";

import "./AlertErrorMessage.css";

export default function AlertErrorMessage({ errors, errorKey }) {
  
  return (
    <>
      {errors[errorKey] && (
        <p className="error-message"><Translate text={errors[errorKey].message} /></p>
      )}
    </>
  );
}
