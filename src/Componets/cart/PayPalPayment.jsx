import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from 'react-redux';
import { Payment } from '../../redux/actions/Payment';
import { toast } from 'react-hot-toast';

export const PayPalPayment = (props) => {
  
  const initialOptions = {
    "client-id": "AeJLeqQQ604DG8FUwAjN_A6A5Tb2j1zj9fyryixR3QI-9UmJ1yV2Fpj0fFy1lcWnuFuD3ugs3DDWkTtO",
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
};

const dispatch = useDispatch();

  return (
    <>
    
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: props.totalprice,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        dispatch(Payment(details.id,props.totalprice));
                        toast.success("Payment Successfull");
                    });
                }}
                // onCancel={(data) => {
                //     console.log(data, "cancel")
                // }}
                onError={(err) => {
                    console.log(err, "error")
                }}
                />
    </PayPalScriptProvider>
    </>
  )
}

