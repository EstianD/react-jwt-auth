import { useState, useEffect } from "react";

const useSigninForm = (callback) => {
  const [signinValues, setSigninValues] = useState({
    signinEmail: "",
    signinPassword: "",
  });

  // Signin errors
  const [signinErrors, setSigininErrors] = useState({});

  const handleSigninChange = (event) => {
    const { name, value } = event.target;

    setSigninValues({
      ...signinValues,
      [name]: value,
    });
  };

  const handleSigninSubmit = (event) => {
    event.preventDefault();
  };
};
