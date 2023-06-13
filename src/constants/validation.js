export const validationRules = {
  gender: { required: "Please select your gender" },
  looking_for: { required: "Please select who are you looking for" },
  dob: { required: "Please select your birtday" },
  location: {
    required: "Location is required",
  },
  username: {
    required: "Username is required",
    maxLength: {
      value: 12,
      message: "Username is to long (max 12 characters)",
    },
    pattern: {
      value: /^[a-zA-Z0-9_]*$/,
      message: "Username is invalid",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password is too short (min 6 characters)",
    },
    maxLength: {
      value: 16,
      message: "Password is too long (max 16 characters)",
    },
    pattern: {
      value: /[0-9].*/,
      message: "Password is invalid",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please specify a valid email address",
    },
  },
};
