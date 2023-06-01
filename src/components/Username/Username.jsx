import AlertErrorMessage from "../AlertErrorMessage/AlertErrorMessage";
import Input from "../Input/Input";

export default function Username({ control, errors }) {
  return (
    <div style={{ marginTop: "16px" }}>
      <Input control={control} type="username" />
      <div className="alert-error-message">
        <AlertErrorMessage errorKey={"username"} errors={errors} />
      </div>
    </div>
  );
}
