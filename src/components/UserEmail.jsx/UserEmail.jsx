import Input from "../Input/Input";
import CheckBox from "../Checkbox/CheckBox";

import AlertErrorMessage from "../AlertErrorMessage/AlertErrorMessage";

export default function UserEmail({ control, errors }) {

  const label_1 = "18 years old";
  const label_2 = (
    <span>
      I have read and accept the
      <span className="green-text"> Terms of Service</span> and our
      <span className="green-text"> Privacy Statement.</span>
    </span>
  );
  
  return (
    <div style={{ marginTop: "16px" }}>
      <Input control={control} type="email" />
      <div className="alert-error-message">
        <AlertErrorMessage errorKey={"email"} errors={errors} />
      </div>
      <div className="checkbox-wrapper">
        <CheckBox label={label_1} />
        <CheckBox label={label_2} />
      </div>
    </div>
  );
}
