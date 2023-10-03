import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const BackendPay = () => {
  const handleOpenRazorpay = (data) => {
    const options = {
      key: "rzp_test_6KsemjonNAURfU",
      amount: Number(data.amount),
      currency: data.currency,
      name: "Abhisek NGO Payment",
      description: "Pay and relief",
      image: "https://avatars.githubusercontent.com/u/112477961?v=4",
      order_id: data.id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        console.log(response, "34");
        var settings = {
          url: "/api/payment/verify",
          method: "POST",
          timeout: 0,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({ response }),
        };
        axios
          .post("https://payment-gateway-gfi0.onrender.com/payment/verify", {
            response: response,
          })
          .then((res) => {
            console.log(res, "29");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: "abhisek code",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios
      .post("https://payment-gateway-gfi0.onrender.com/payment/orders", _data)
      .then((res) => {
        //   console.log(res.data, "29");
        handleOpenRazorpay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h2>Payment Gateway</h2>
      </div>
      <div>
        <Button
          style={{ color: "white", backgroundColor: "#ac5fcb" }}
          onClick={() => handlePayment(10)}
        >
          Pay Amount
        </Button>
      </div>
    </div>
  );
};

export default BackendPay;
