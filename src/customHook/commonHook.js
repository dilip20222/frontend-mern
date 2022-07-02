import { useState } from "react";

const commonValidationHook = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  console.log("setValues",setValues)

  const validate = (event, name, value) => {
    switch (name) {
    case "userName":
      if (value.length > 0) {
        setError({ ...error, name: "Please Enter the valid name" });
      }
      break;
    case "password":
      if (
        !new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
        ).test(value)
      ) {
        setError({ ...error, name: "Please Enter the valid Password" });
      }
      break;
    default:
      break;
    }
  };
  validate()
  return {
    values,
    error,
  };
};

export default commonValidationHook;
