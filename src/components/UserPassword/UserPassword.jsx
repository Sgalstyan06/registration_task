import AlertErrorMessage from "../AlertErrorMessage/AlertErrorMessage";
import Input from "../Input/Input";

export default function UserPassword({ control, errors }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <Input control={control} type="password" />
      <AlertErrorMessage errors={errors} errorKey={"password"} />
    </div>
  );
}
