import SelectAge from "../muiComponents/SelectAge/SelectAge";

export const currentYear = new Date().getFullYear();

function numbersUpTo(max) {

  return Array.from(Array(max).keys()).map(
    (i) => `${i < 9 ? "0" : ""}${i + 1}`
  );
}

function yearsBackTo(count) {

  return Array.from(Array(count).keys()).map((i) => `${currentYear - i}`);
}

const data = {
  month: numbersUpTo(12),
  day: numbersUpTo(31),
  year: yearsBackTo(100),
};

export default function Dob({ errors, control }) {
  
  return (
    <>
      <div className="select-age-wrapper">
        <SelectAge
          label="day"
          options={data.day}
          control={control}
          errors={errors}
        />
        <SelectAge
          label="month"
          options={data.month}
          control={control}
          errors={errors}
        />
        <SelectAge
          label="year"
          options={data.year}
          control={control}
          errors={errors}
          currentYear={currentYear}
        />
      </div>
      {((errors.day || errors.month || errors.year?.type === "required") && (
        <p className="error-message">Please select your date of birthday</p>
      )) ||
        (errors.year && (
          <p className="error-message">{errors.year.message} </p>
        ))}
    </>
  );
}
