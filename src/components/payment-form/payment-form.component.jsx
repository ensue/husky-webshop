import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  
  const paymentHandler = async (e) =>{
    e.preventDefault();
    if(!stripe || !elements) {
      return;
    }

    

  }


  return (
    <div>
      <CardElement />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Zapłać</Button>
    </div>
  );
};

export default PaymentForm;
