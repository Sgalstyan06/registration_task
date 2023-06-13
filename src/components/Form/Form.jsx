import { useState } from "react";

import { Translate } from "react-translated";

import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";

import "./Form.css";

import { startRegistration, endRegistration } from "../../services/httpRequest";

import logo from "../../images/logo.png";

import RenderStep, { STEPS } from "../RenderStep/RenderStep";

import { underAgeValidate } from "../../services/dob";

const buttonStyle = {
  bgcolor: "#F76448",
  height: "48px",
  fontFamily: "Public Sans",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "26px",
  color: "#FFFFFF",
  borderRadius: "16px",
  textTransform: "none",
};

export default function Form() {
  const [step, setStep] = useState(0);
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMesage] = useState("");
  const [successRegistration, setSuccessRegistration] = useState("");

  const [ageValidationError, setAgeValidationError] = useState(false);

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: "",
      looking_for: "",
      day: "",
      month: "",
      year: "",
      location: "",
      username: "",
      password: "",
      email: "",
    },
    mode: "onChange",
  });

  const [gender, looking_for] = watch(["gender", "looking_for"]);

  const onSubmit = async (data) => {
    data.DOB = `${data.year}-${data.month}-${data.day}`;

    const { day, year, month, username, ...sendingData } = data;

    if (step === STEPS.AGE_STEP) {
      const birthday = watch(["year", "month", "day"]).join("-");

      if (underAgeValidate(birthday) < 18) {
        setAgeValidationError(true);
        return;
      } else {
        setAgeValidationError(false);
      }
    }

    if (!userId && step === STEPS.USERNAME_STEP) {
      try {
        const response = await startRegistration(username);

        if (response.Status === "ok") {
          setUserId(response.Data);
          setErrorMesage("");
          next();
        } else {
          setErrorMesage(response.Error.message);
        }
      } catch (e) {
        setErrorMesage("Something went wrong");
      }

      return;
    }

    if (step === STEPS.CONFIRMATION_STEP) {
      try {
        const response = await endRegistration(userId, sendingData);

        if (response.Status === "ok") {
          setSuccessRegistration(
            "Your registration has been successfully done"
          );
          setErrorMesage("");
        } else {
          setErrorMesage(response.Error.message);
        }
      } catch (e) {
        setErrorMesage("Something went wrong");
      }
    }

    next();
  };

  function next() {
    if (step > 4) return;
    setStep(step + 1);
  }

  function previous() {
    if (step === 0) return;
    setStep(step - 1);
  }

  return (
    <div className="outer-form">
      <div className="form-section">
        <div className="logo-wrapper">
          <img src={logo} alt="Intim Florts" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <RenderStep
            step={step}
            setValue={setValue}
            errors={errors}
            control={control}
            gender={gender}
            looking_for={looking_for}
            ageValidationError={ageValidationError}
          />
          <div className="button-wrapper">
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                ...buttonStyle,
                ":hover": {
                  bgcolor: "#F76448",
                },
              }}
              disabled={!!successRegistration}
            >
              <Translate
                text={step === STEPS.CONFIRMATION_STEP ? "Complete" : "Next"}
              />
            </Button>

            <Button
              variant="outlined"
              fullWidth
              onClick={previous}
              sx={{
                ...buttonStyle,
                border: "none",
                bgcolor: "#FFFFFF",
                color: "black",
                ":hover": { border: "none", bgcolor: "#FFFFFF" },
                "& .MuiTouchRipple-root span": {
                  backgroundColor: "#dae5e6",
                  opacity: 0.3,
                },
              }}
              disabled={!!successRegistration}
            >
              <Translate text="Back" />
            </Button>
          </div>
          {errorMessage && (
            <p className="error-message">
              <Translate text={errorMessage} />
            </p>
          )}
          {successRegistration && (
            <p style={{ color: "green" }}>
              <Translate text={successRegistration} />
            </p>
          )}
        </form>
      </div>
      {step === STEPS.GENDER_SETP && (
        <div className="already-sign-up">
          <Translate text="Already have an account" />?{" "}
          <span>
            <Translate text="Log In" />
          </span>
        </div>
      )}
    </div>
  );
}
