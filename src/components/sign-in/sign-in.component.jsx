import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>signin page</h1>
      <button onClick={logGoogleUser}>Zaloguj kontem Google</button>
    </div>
  );
};

export default SignIn;
