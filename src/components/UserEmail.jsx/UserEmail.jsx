import { useEffect } from "react";

import Input from "../Input/Input";
import CheckBox from "../Checkbox/CheckBox";

import { Translate } from "react-translated";

import AlertErrorMessage from "../AlertErrorMessage/AlertErrorMessage";

export default function UserEmail({ control, errors, isDisabled, watch }) {
  const [email, acceptTerms, ageTerms] = watch([
    "email",
    "acceptTerms",
    "ageTerms",
  ]);

  useEffect(() => {
    isDisabled([email, acceptTerms, ageTerms]);
  }, [email, acceptTerms, ageTerms]);

  const label_1 = <Translate text="18 years old" />;

  const label_2 = (
    <span>
      <Translate text="I have read and accept the" />
      <span className="green-text">
        {" "}
        <Translate text="Terms of Service" />
      </span>{" "}
      and our
      <span className="green-text">
        {" "}
        <Translate text="Privacy Statement" />
      </span>
    </span>
  );

  return (
    <div style={{ marginTop: "16px" }}>
      <Input control={control} type="email" />
      <div className="alert-error-message">
        <AlertErrorMessage errorKey={"email"} errors={errors} />
      </div>
      <div className="checkbox-wrapper">
        <CheckBox
          label={label_1}
          control={control}
          errors={errors}
          errorMessage="You must be older then 18 years"
          name="acceptTerms"
        />
        <CheckBox
          label={label_2}
          control={control}
          errors={errors}
          errorMessage="You must ugry with our terms"
          name="ageTerms"
        />
      </div>
    </div>
  );
}
