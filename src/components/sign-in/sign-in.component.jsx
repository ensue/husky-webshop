import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return (
    <div>
      <h1>signin page</h1>
      <button onClick={logGoogleUser}>Zaloguj kontem Google</button>
    </div>
  );
};

export default SignIn;
