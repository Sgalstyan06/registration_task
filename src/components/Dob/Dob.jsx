import { Translate } from "react-translated";

import SelectAge from "../SelectAge/SelectAge";

import { dobData } from "../../services/dob";
import { useEffect } from "react";

export default function Dob({ errors, control, ageValidationError, isDisabled, watch }) {

  const [day,month, year] = watch(["day", "month", "year"]);

  useEffect(() => {
    isDisabled([day, month, year])
  }, [day, month, year])

  return (
    <>
      <div className="select-age-wrapper">
        <SelectAge
          label="day"
          options={dobData.day}
          control={control}
          errors={errors}
        />
        <SelectAge
          label="month"
          options={dobData.month}
          control={control}
          errors={errors}
        />
        <SelectAge
          label="year"
          options={dobData.year}
          control={control}
          errors={errors}
        />
      </div>
      {((errors.day || errors.month || errors.year) && (
        <p className="error-message">
          <Translate text="Please select your date of birthday" />
        </p>
      )) ||
        (ageValidationError && (
          <p className="error-message">
            <Translate text="You must be at least 18 years old to use Intim Flort" />
          </p>
        ))}
    </>
  );
}
