// import "../assets/css/style.css";
// import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
// import Form from "../components/Form";
import Footer from "../components/Footer";

import { useState } from "react";
import "../app.css";
import FormInput from "../components/Form";

const App = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "Name",
            type: "text",
            errorMessage:
                "This field is required",
            label: "Name",
            pattern: "^[A-Za-z0-9]{1,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            errorMessage: "Invalid email address.",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "message",
            type: "text-area",
            errorMessage:
                "This field is required",
            label: "Message",
            pattern: "^[A-Za-z0-9]{1,16}$",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Card></Card>
            <div className="app">
                <form onSubmit={handleSubmit}>
                    <h3>CONTACT US</h3>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button>Submit</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default App;

// export default function Home(props) {

//     return (
//         <>
            // <Navbar></Navbar>
            // <Carousel></Carousel>
            // <Card></Card>
            // <Form></Form>
            // <Footer></Footer>
//         </>
//     );
// }
