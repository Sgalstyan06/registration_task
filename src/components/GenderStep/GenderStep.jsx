import { useEffect } from "react";
import SelectGender from "../SelectGender/SelectGender";
import Title from "../Title/Title";

export default function GenderStep({
  control,
  errors,  
  isDisabled,
  watch,
}) {

const [gender, looking_for] = watch(["gender", "looking_for"])

useEffect(() => {
  isDisabled([gender, looking_for])
}, [gender, looking_for])
  return (
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
}
