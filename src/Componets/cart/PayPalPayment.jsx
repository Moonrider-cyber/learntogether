import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from 'react-redux';

export const PayPalPayment = (props) => {
  
  
  const initialOptions = {
    "client-id": "AeJLeqQQ604DG8FUwAjN_A6A5Tb2j1zj9fyryixR3QI-9UmJ1yV2Fpj0fFy1lcWnuFuD3ugs3DDWkTtO",
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
};
let { user } = useSelector((state) => state.user);

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
                        // const name = details.payer.name.given_name;
                        console.log(details, "details")
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

