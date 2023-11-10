import { useState } from "react";
import {
  createAuthUserWithEmailAndPasswords,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords are not equal");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPasswords(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log("user creation error:", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          name="displayName"
          id="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

        <FormInput
          label={"Email"}
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label={"Password"}
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          label={"Confirm password"}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
