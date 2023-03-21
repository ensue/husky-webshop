import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;


  return (
    <div>
      <h1>Zarejestruj</h1>
      <form onSubmit={() => {}}>
        <label>Nazwa użytkownika</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Hasło</label>
        <input type="password" required />
        <label>Potwierdź hasło</label>
        <input type="password" required />
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default SignUpForm;