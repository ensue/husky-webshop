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

    const handleChange = (event)=>{

    };

  return (
    <div>
      <h1>Zarejestruj</h1>
      <form onSubmit={() => {}}>
        <label>Nazwa użytkownika</label>
        <input type="text" required onChange={handleChange}/>
        <label>Email</label>
        <input type="email" required onChange={handleChange}/>
        <label>Hasło</label>
        <input type="password" required onChange={handleChange}/>
        <label>Potwierdź hasło</label>
        <input type="password" required onChange={handleChange}/>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default SignUpForm;