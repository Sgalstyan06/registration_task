import LinearProgress from "@mui/material/LinearProgress";

import { Translate } from "react-translated";

import birthday_red_icon from "../../images/icons/step_icons/birthday_red_icon.png";
import birthday_gray_icon from "../../images/icons/step_icons/birthday_gray_icon.png";
import birthday_yellow_icon from "../../images/icons/step_icons/birthday_yellow_icon.png";
import choose_your_love_red_icon from "../../images/icons/step_icons/choose_your_love_red_icon.png";
import choose_your_love_yellow_icon from "../../images/icons/step_icons/choose_your_love_yellow_icon.png";
import location_gray_icon from "../../images/icons/step_icons/location_gray_icon.png";
import location_red_icon from "../../images/icons/step_icons/location_red_icon.png";
import location_yellow_icon from "../../images/icons/step_icons/location_yellow_icon.png";
import lock_gray_icon from "../../images/icons/step_icons/lock_gray_icon.png";
import lock_red_icon from "../../images/icons/step_icons/lock_red_icon.png";
import lock_yellow_icon from "../../images/icons/step_icons/lock_yellow_icon.png";
import user_gray_icon from "../../images/icons/step_icons/user_gray_icon.png";
import user_red_icon from "../../images/icons/step_icons/user_red_icon.png";
import user_yellow_icon from "../../images/icons/step_icons/user_yellow_icon.png";
import email_gray_incon from "../../images/icons/step_icons/email_gray_icon.png";
import email_red_incon from "../../images/icons/step_icons/email_red_icon.png";

import Title from "../Title/Title";
import UserEmail from "../UserEmail.jsx/UserEmail";
import Dob from "../Dob/Dob";
import SelectGender from "../SelectGender/SelectGender";
import Username from "../Username/Username";
import UserPassword from "../UserPassword/UserPassword";
import UserLocation from "../UserLocation/UserLocation";

import "./RenderStep.css";
import { useEffect } from "react";

export const stepIcons = [
  {
    yellow: choose_your_love_yellow_icon,
    red: choose_your_love_red_icon,
  },
  {
    gray: birthday_gray_icon,
    red: birthday_red_icon,
    yellow: birthday_yellow_icon,
  },

  {
    gray: location_gray_icon,
    red: location_red_icon,
    yellow: location_yellow_icon,
  },
  {
    gray: user_gray_icon,
    red: user_red_icon,
    yellow: user_yellow_icon,
  },
  {
    gray: lock_gray_icon,
    red: lock_red_icon,
    yellow: lock_yellow_icon,
  },
  {
    gray: email_gray_incon,
    red: email_red_incon,
  },
];

export const STEPS = {
  GENDER_SETP: 0,
  AGE_STEP: 1,
  LOCATION_STEP: 2,
  USERNAME_STEP: 3,
  PASSWORD_STEP: 4,
  CONFIRMATION_STEP: 5,
};

export default function RenderStep(props) {
  const {
    step,
    errors,
    control,
    setValue,
    watch,
    isDisabled,
    ageValidationError,
  } = props;

  const {
    gender,
    looking_for,
    day,
    month,
    year,
    location,
    username,
    password,
    email,
    acceptTerms,
    ageTerms,
  } = watch();

  let linearProgressValue;

  let currentStep;

  switch (step) {
    case STEPS.GENDER_SETP: {
      linearProgressValue = 2;

      isDisabled([gender, looking_for]);

      currentStep = (
        <>
          <Title title="Your gender" />
          <SelectGender
            control={control}
            type="gender"
            errors={errors}
            gender={gender}
         />
          <Title title="You are interested in" />
          <SelectGender
            control={control}
            type="looking_for"
            errors={errors}
            gender={looking_for}
          />
        </>
      );
      break;
    }

    case STEPS.AGE_STEP: {
      linearProgressValue = 23;

      isDisabled([day, month, year]);

      currentStep = (
        <>
          <Title title="Your age" />
          <h2 className="sub-title">
            <Translate text="You must be at least 18 years old to use Intim Flort" />
          </h2>

          <Dob
            errors={errors}
            control={control}
            ageValidationError={ageValidationError}
          />
        </>
      );

      break;
    }

    case STEPS.LOCATION_STEP: {
      linearProgressValue = 42;

      currentStep = (
        <>
          <Title title="Your location" />
          <h2 className="sub-title">
            <Translate text="Search location by city, country or zip code" />
          </h2>
          <UserLocation control={control} setValue={setValue} errors={errors} isDisabled={isDisabled} location={location} />
        </>
      );
      break;
    }
    case STEPS.USERNAME_STEP: {
      linearProgressValue = 60;

      isDisabled([username]);

      currentStep = (
        <>
          <Title title="Create a username" />
          <Username control={control} errors={errors} />
        </>
      );
      break;
    }
    case STEPS.PASSWORD_STEP: {
      linearProgressValue = 78.5;

      isDisabled([password]);

      currentStep = (
        <>
          <Title title="Create a password" />
          <UserPassword control={control} errors={errors} />
        </>
      );
      break;
    }
    case STEPS.CONFIRMATION_STEP: {
      linearProgressValue = 98;

      isDisabled([email, acceptTerms, ageTerms]);

      currentStep = (
        <>
          <Title title="Add email address" />
          <UserEmail control={control} errors={errors} />
        </>
      );
      break;
    }
    default:
      break;
  }

  return (
    <div>
      <div className="step-icons-wrapper">
        {stepIcons.map((icon, i) => {
          if (i === step) {
            return <img key={icon.red} src={icon.red} alt="icon" />;
          }

          if (i < step) {
            return <img key={icon.yellow} src={icon.yellow} alt="icon" />;
          }

          if (i > step) {
            return <img key={icon.gray} src={icon.gray} alt="icon" />;
          }
        })}
      </div>

      <LinearProgress
        sx={{
          width: "534px",
          background: "#E5E8EB",
          borderRadius: "2px",
          ".MuiLinearProgress-bar": {
            backgroundColor: "#FFDC22!important",
          },
          "@media (max-width: 780px)": {
            maxWidth: "420px",
          },
          "@media (max-width: 510px)": {
            maxWidth: "310px",
          },
        }}
        variant="determinate"
        value={linearProgressValue}
        color="secondary"
      />
      <div className="input-wrapper">{currentStep}</div>
    </div>
  );
}
