import "./AlertErrorMessage.css";

export default function AlertErrorMessage({ errors, errorKey }) {
  
  return (
    <>
      {errors[errorKey] && (
        <p className="error-message">{errors[errorKey].message}</p>
      )}
    </>
  );
}
