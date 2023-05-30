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
import user_gray_icon from "../../images/icons/step_icons/user_gray_icon.png";
import user_red_icon from "../../images/icons/step_icons/user_red_icon.png";
import user_yellow_icon from "../../images/icons/step_icons/user_yellow_icon.png";
import SelectGender from "../muiComponents/SelectGender/SelectGender";

import Dob from "../Dob/Dob";
import Username from "../muiComponents/Username/Username";
import UserPassword from "../muiComponents/UserPassword/UserPassword";
import UserLocation from "../muiComponents/UserLocation/UserLocation";

import "./RenderStep.css";
import Title from "../Title/Title";

const stepIcons = [
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
  },
];

export const STEPS = {
  GENDER_SETP: 0,
  AGE_STEP: 1,
  LOCATION_STEP: 2,
  USERNAME_STEP: 3,
  CONFIRMATION_STEP: 4,
};

export default function RenderStep(props) {
  
  let linearProgressValue;

  const { step, errors, control, setValue, gender, looking_for } = props;

  let currentStep;

  switch (step) {
    case STEPS.GENDER_SETP: {
      linearProgressValue = 2;
      currentStep = (
        <>
          <Title title="Your gender" />
          <SelectGender
            control={control}
            name_props="gender"
            errors={errors}
            gender={gender}
          />
          <Title title="You are interested in" />
          <SelectGender
            control={control}
            name_props="looking_for"
            errors={errors}
            gender={looking_for}
          />
        </>
      );
      break;
    }

    case STEPS.AGE_STEP: {
      linearProgressValue = 27;
      currentStep = (
        <>
          <Title title="Your age" />
          <h2 className="sub-title">
            You must be at least 18 years old to use Intim Flort
          </h2>

          <Dob errors={errors} control={control} />
        </>
      );
      break;
    }

    case STEPS.LOCATION_STEP: {
      linearProgressValue = 52;
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
      linearProgressValue = 75;
      currentStep = (
        <>
          <Title title="Create a username" />
          <Username control={control} errors={errors} />
        </>
      );
      break;
    }
    case STEPS.CONFIRMATION_STEP: {
      linearProgressValue = 98;
      currentStep = (
        <>
          <Title title="Create a password" />
          <UserPassword control={control} errors={errors} />
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
            return <img key={icon.red} src={icon.red} alt="" />;
          }
          if (i < step) {
            return <img key={icon.yellow} src={icon.yellow} alt="" />;
          }

          if (i > step) {
            return <img key={icon.gray} src={icon.gray} alt="" />;
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
