import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import {
  useEmailInvoiceMutation,
  useAddOrderedProductsMutation,
} from "../store/apiSlice";
import { useNavigate } from "react-router-dom";
export default function CheckoutForm() {
  const [isChecked, setChecked] = useState(false);
  const buttonText = isChecked ? 'PAY LATER $ POST NOW' : 'PAY NOW $ POST';
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const invoiceId = useSelector((state) => state.posts.invoiceId)
  //console.log("username", username)
  //console.log("userid, invoiceId", userid, invoiceId)
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [emailInvoice] = useEmailInvoiceMutation()
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isChecked) {
      //Email Invoice
      await emailInvoice(invoiceId)
      navigate("/post-a-job");
      return;
    }
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/post-a-job`,
        },
        payment_method: {
          billing_details: {
            name: `${userInfo.firtName} ${userInfo.lastName}`, // Full name of the cardholder
            email: userInfo.email
          },
          metadata: {
            userid: userInfo.id,
            invoiceId: invoiceId,
          },
        },
      });
      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }
        setIsProcessing(false);
      } else {
        //alert(userid);
        //await addOrderedProducts({ userid, invoiceId });
        setMessage("Payment successful!"); // You can set a success message if needed
      }
    } catch (error) {
      setMessage("An error occurred while processing the payment.");
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PaymentElement id="payment-element" />
      <div className="flex items-center mr-4 bg-orange-300 rounded px-2 py-2">
        <input
          type="checkbox"
          className="form-checkbox mt-1 mr-2"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="text-gray-500">Pay later and post now - Email me the invoice.</label>
      </div>
      <button disabled={isProcessing || !stripe || !elements} id="submit" className="btn btn-primary">
        <span id="button-text">
          {isProcessing ? "Processing ... " : buttonText}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
