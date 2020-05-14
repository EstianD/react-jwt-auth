export default function validateSignup(values) {
  let errors = {};

  //   Validate username
  if (!values.signupUsername) {
    errors.signupUsername = "Please enter a username";
  }

  // Validate email
  if (!values.signupEmail) {
    errors.signupEmail = "Please enter a email address";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.signupEmail)
  ) {
    errors.signupEmail = "Email address is invalid";
  }

  //   Validate password
  if (!values.signupPassword) {
    errors.signupPassword = "Please enter a password";
  } else if (values.signupPassword.length < 6) {
    errors.signupPassword = "Password needs to be atleast 10 characters";
  }

  return errors;
}
