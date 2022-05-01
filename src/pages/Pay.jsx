import React, {useState} from "react";
import {toast} from "react-toastify";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

const __DEV__ = document.domain === "localhost";

function Pay() {
    const [name, setName] = useState("Mehul");

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            // alert("Razorpay SDK failed to load. Are you online?");
            toast.error("Some error occurred. Please try again later.");
            return;
        }

        const data = await fetch("http://localhost:8080/razorpay", {
            method: "POST",
            body: JSON.stringify({
                amount: "100",
            }),
        }).then((t) => t.json());

        console.log(data);

        const options = {
            key: __DEV__ ? "rzp_test_mAa9xKRpHr07z0" : "PRODUCTION_KEY",
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Donation",
            description: "Thank you for nothing. Please give us some money",
            image: "http://localhost:8080/logo",
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name,
                email: "prasannavelmuruagn0200@gmail.com",
                phone_number: "",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div
            className="App"
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <header className="App-header">
                <a
                    className="App-link"
                    onClick={displayRazorpay}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Donate $5
                </a>
            </header>
        </div>
    );
}

export default Pay;
