import {registrationEventAxios} from "../../axios/registration.axios";
import {toast} from "react-toastify";

const __DEV__ = document.domain === "localhost";

const loadScript = (src) => {
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
};

export const displayRazorpay = async (
    name,
    email,
    phone,
    department,
    year,
    college,
    event,
    amount
) => {
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
            amount,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((t) => t.json());

    console.log(data);

    const options = {
        key: __DEV__ ? "rzp_test_mAa9xKRpHr07z0" : "PRODUCTION_KEY",
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: "Donation",
        description: "Thank you for nothing. Please give us some money",
        // image: "http://localhost:8080/logo",
        handler: async function (response) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            await registrationEventAxios(
                name.current.value,
                email.current.value,
                phone.current.value,
                department.current.value,
                year.current.value,
                college.current.value,
                event.current.value
            ).then((res) => {
                if (res.status === 200) {
                    name.current.value = "";
                    email.current.value = "";
                    phone.current.value = "";
                    department.current.value = "Select Departnemt";
                    year.current.value = "Select Year";
                    college.current.value = "Select College";
                    event.current.value = "Select Event";

                    toast.success("Hooray! You are registered successfully.");
                } else {
                    toast.error(
                        "Oops! Registration failed. Please try again in a moment."
                    );
                }
            });
        },
        prefill: {
            name,
            email: "prasannavelmuruagn0200@gmail.com",
            phone_number: "",
        },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
