import LinearProgress from "@mui/material/LinearProgress";

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
import useWindowSize from "../../services/hooks/useWindowSize";
import Dob from "../Dob/Dob";
import SelectGender from "../SelectGender/SelectGender";
import Username from "../Username/Username";
import UserPassword from "../UserPassword/UserPassword";
import UserLocation from "../UserLocation/UserLocation";

import "./RenderStep.css";

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
  const mobileSize = useWindowSize();

  const {
    step,
    errors,
    control,
    setValue,
    gender,
    looking_for,
    ageValidationError,
  } = props;

  let linearProgressValue;

  let currentStep;

  switch (step) {
    case STEPS.GENDER_SETP: {
      linearProgressValue = 2;

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
      linearProgressValue = mobileSize ? 23 : 27;

      currentStep = (
        <>
          <Title title="Your age" />
          <h2 className="sub-title">
            You must be at least 18 years old to use Intim Flort
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
      linearProgressValue = mobileSize ? 41.5 : 52;

      currentStep = (
        <>
          <Title title="Your location" />
          <h2 className="sub-title">
            Search location by city, country or zip code
          </h2>
          <UserLocation control={control} setValue={setValue} errors={errors} />
        </>
      );
      break;
    }
    case STEPS.USERNAME_STEP: {

      linearProgressValue = mobileSize ? 60 : 75;

      currentStep = (
        <>
          <Title title="Create a username" />
          <Username control={control} errors={errors} />
        </>
      );
      break;
    }
    case STEPS.PASSWORD_STEP: {

      linearProgressValue = mobileSize ? 78.5 : 98;

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
          if ( !mobileSize && i === stepIcons.length - 1 ) {
            if (step === STEPS.CONFIRMATION_STEP) {
              return <img key={icon.red} src={icon.red} alt="icon" />;
            }
            return;
          }
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
