import { useState } from "react";

import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";

import "./Form.css";

import { startRegistration, endRegistration } from "../../services/httpRequest";

import logo from "../../images/logo.png";
import RenderStep from "../RenderStep/RenderStep";

export default function Form() {
  const [step, setStep] = useState(0);
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMesage] = useState("");
  const [successRegistration, setSuccessRegistration] = useState("");

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
  };

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    getValues,
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
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    data.DOB = `${data.year}-${data.month}-${data.day}`;

    const { day, year, month, username, ...sendingData } = data;

    if (!userId && step === 3) {
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
        setErrorMesage("Somethig went wrong");
      }

      return;
    }

    if (step === 4) {
      try {
        const response = await endRegistration(userId, sendingData);

        if (response.Status === "ok") {
          setSuccessRegistration("Your are succesfully registration");
        } else {
          setErrorMesage(response.Error.message);
        }
      } catch (e) {
        setErrorMesage("Somethig went wrong");
      }
    }

    next();
  };

  function next() {
    if (step > 3) return;
    setStep(step + 1);
  }

  function previous() {
    if (step === 0) return;
    setStep(step - 1);
  }
  console.log("getva;", watch(["gender", "looking_for"]))
  
  return (
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
          watch={watch}
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
          >
            Next
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
            }}
          >
            Back
          </Button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successRegistration && (
        <p style={{ color: "green" }}>{successRegistration}</p>
      )}
    </div>
  );
}
