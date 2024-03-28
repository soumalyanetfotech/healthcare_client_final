import { useState, useEffect } from "react";
import axios from "axios";
import "../payment/Payment.css";
import config from '../config.json';

import price_999 from "../assets/Group 47799999.png"
import price_2499 from "../assets/Group 478002499.png"
import price_4499 from "../assets/Group 478014499.png"
import price_hero from "../assets/Group 18price_Hero.png"
import pricing_hero from "../assets/rectanglepink - Copy.png"

const baseUrl = config.base_url;

function Payment() {
    const [book, setBook] = useState([
        {
            name: "Starter",
            image: price_999, // Use imported image directly
            session: "1 Session",
            paragraphs: [
                "I week of Chat Access ",
                "2 Assessment Tests",
                "45 mins Session"
            ],
            price: 999,
        },
        {
            name: "Advanced",
            image: price_2499, // Use imported image directly
            session: "5 Sessions",
            paragraphs: [
                "2 weeks of Chat Access ",
                "2 Assessment Tests",
                "60 mins Session"
            ],
            price: 2499,
        },
        {
            name: "Premium",
            image: price_4499, // Use imported image directly
            session: "10 Sessions",
            paragraphs: [
                "4 weeks of Chat Access ",
                "2 Assessment Tests",
                "60 mins Session"
            ],
            price: 4499,
        }
    ]);
    // const [userRole, setUserRole] = useState("");
    // const [email, setEmail] = useState("");|
    const [pay, setPay] = useState("");
    const [razorpay_order_id, setRazorpay_order_id] = useState("");
    const [razorpay_payment_id, setRazorpay_payment_id] = useState("");
    const [razorpay_signature, setRazorpay_signature] = useState("");


    const setEmailToLocalStorage = (email) => {
        localStorage.setItem("email", email);
      };

      const handleEmailChange = (e) => {
        setEmailToLocalStorage(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email,razorpay_order_id,razorpay_payment_id,razorpay_signature);
        const email = localStorage.getItem("email");
        fetch(`${baseUrl}/payment`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
          }),
        })
    }




    useEffect(() => {
        // Load Razorpay SDK script
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => {
            // SDK script loaded successfully
            console.log("Razorpay SDK loaded");
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup function to remove the script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    const initPayment = async (amount) => {
        if (window.Razorpay) {
            try {
                const orderUrl = "http://localhost:4000/api/payment/orders";
                const { data } = await axios.post(orderUrl, { amount });
                console.log(data);
                const options = {
                    key: "rzp_test_nW4W3Z3irQjkIr", // Replace with your Razorpay API key
                    amount: data.data.amount,
                    currency: data.data.currency,
                    name: book.name,
                    description: "Test Transaction",
                    image: book.img,
                    order_id: data.data.id,
                    handler: async (response) => {
                        try {
                            const verifyUrl = "http://localhost:4000/api/payment/verify";
                            const { data } = await axios.post(verifyUrl, response);
                            console.log(data);
                        } catch (error) {
                            console.log(error);
                        }
                    },
                    theme: {
                        color: "#7cae9e",
                    },
                };
                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            } catch (error) {
                console.log(error);
            }
        } else {
            console.error("Razorpay SDK not loaded");
        }
    };

    const handlePayment = async (amount) => {
        try {
            await initPayment(amount);
        } catch (error) {
            console.log(error);
        }
    };
    function FAQItem({ question, answer }) {
        const [isOpen, setIsOpen] = useState(false);

        const toggleAnswer = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="faq-item" onClick={toggleAnswer}>
                <div className="question">{question}</div>
                {isOpen && <div className="answer">{answer}</div>}
            </div>
        );
    }

    return (
        <div className="price_home">
            <div>
                <img className="price_hero_img" src={price_hero} alt="hero img" />
                <p className="price_hero_1">Explore Our Plans & Pricing</p>
                <p className="price_hero_2">We offer a range of plans designed to provide you with the support you need, at a price that fits your budget. Discover the options below and choose the plan that aligns with your mental health journey.</p>
            </div>
            <div className="App-book">
                <img className="pricing_heroimg" src={pricing_hero} />
                <div className="cards_container">
                    {book.map((book, index) => (
                        <div key={index} className="book_container">
                            <p className="book_name">{book.name}</p>
                            <img src={book.image} alt="book_img" className="book_img" />
                            <p className="book_session">{book.session}</p>
                            <hr />
                            <p className="book_features">Features</p>
                            <div className="book_paragraphs">
                                {book.paragraphs.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                            <hr />
                            <p className="book_price">
                                <span>&#x20B9; {book.price}</span>
                            </p>
                            <button onClick={() => handlePayment(book.price)} className="buy_btn" onChange={(e) => setPay(e.target.value)}>
                                Buy Now
                            </button>
                        </div>

                    ))}
                </div>

            </div>

            <div >
                <p className="price-p1">Have questions or couldn't find the plan you're looking for? No worries!</p>
                <p className="price-p2">We're here to help. Please feel free to give us a call at <a>+910000000000</a>, and our friendly team will assist you in finding the perfect plan to meet your needs.</p>
            </div>
            <div className="App_pay">
                <h1>Frequently Asked Questions</h1>
                <div className="faq-container">
                    <FAQItem
                        question="What is React?"
                        answer="React is a JavaScript library for building user interfaces."
                    />
                    <FAQItem
                        question="How do I install React?"
                        answer="You can install React using npm or yarn. Run 'npm install react' or 'yarn add react' in your project directory."
                    />
                    <FAQItem
                        question="What are components in React?"
                        answer="Components are reusable pieces of UI that can contain HTML, CSS, and JavaScript logic. They help in building complex UIs by breaking them into smaller pieces."
                    />
                    <FAQItem
                        question="What is JSX?"
                        answer="JSX is a syntax extension for JavaScript used with React. It allows you to write HTML elements and components in the same file."
                    />
                    <FAQItem
                        question="What is the virtual DOM?"
                        answer="The virtual DOM is a lightweight copy of the real DOM. React uses it to perform efficient updates to the UI by comparing the virtual DOM with the real DOM and only applying the differences."
                    />
                    <FAQItem
                        question="What are React hooks?"
                        answer="React hooks are functions that let you use state and other React features without writing a class. They allow you to use state and other React features in functional components."
                    />
                </div>
            </div>
        </div>
    );
}

export default Payment;
