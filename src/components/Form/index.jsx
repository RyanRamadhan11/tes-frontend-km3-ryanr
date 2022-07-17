import { useState } from "react";
import "./style.module.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label><br></br>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;

// import React from "react";
// import "./style.module.css";
// import { useForm } from "react-hook-form";
// import PasswordPopover from "./PasswordPopover";

// function later(delay: number) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, delay);
//     });
// }

// type FormInputs = {
//     fullName: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//     agree: boolean;
//     subscribe: boolean;
// };

// function Form() {
//     const {
//         register,
//         handleSubmit,
//         errors,
//         getValues,
//         setError,
//         clearErrors,
//         formState,
//         reset,
//     } = useForm < FormInputs > ();
//     const onSubmit = async (data: FormInputs) => {
//         if (data.password !== data.confirmPassword) {
//             setError("password", {
//                 type: "passwordMatch",
//                 message: "Your password and confirmation password do not match.",
//             });
//             setError("confirmPassword", {
//                 type: "passwordMatch",
//                 message: "Your password and confirmation password do not match.",
//             });
//         }
//         await later(3000);
//         alert("Thank you for Register");
//         reset();
//     };
//     return (
//         <div>
//             <h1> Create an Account </h1>
//             <form>
//                 <label> Fullname * </label>
//                 <input
//                     type="text"
//                     name="fullName"
//                     ref={register({ required: "Fullname Required" })}
//                 />
//                 {errors.fullName && (
//                     <p className="error"> {errors.fullName.message} </p>
//                 )}

//                 <label> Email *</label>
//                 <input
//                     type="email"
//                     name="email"
//                     ref={register({
//                         required: true,
//                         pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                     })}
//                 />

//                 {errors.email && errors.email.type == "required" && (
//                     <p className="error"> Email Required </p>
//                 )}
//                 {errors.email && errors.email.type == "pattern" && (
//                     <p className="error"> Invalid Email </p>
//                 )}

//                 <label htmlFor=""> Password * </label>
//                 <PasswordPopover>
//                     {(
//                         props // validate, visible
//                     ) => (
//                         <input
//                             name="password"
//                             type="password"
//                             autoComplete="new-password"
//                             ref={register({ required: "Password Required" })}
//                             onFocus={() => props.visible(true)}
//                             onBlur={() => props.visible(false)}
//                             onChange={() =>
//                                 props.validate("password", getValues, setError, clearErrors)
//                             }
//                         />
//                     )}
//                 </PasswordPopover>
//                 {errors.password && (
//                     <p className="error"> {errors.password.message} </p>
//                 )}
//                 <label htmlFor=""> Confirm Password * </label>
//                 <PasswordPopover>
//                     {(
//                         props // validate, visible
//                     ) => (
//                         <input
//                             name="confirmPassword"
//                             type="password"
//                             autoComplete="new-password"
//                             ref={register({ required: "Password Required" })}
//                             onFocus={() => props.visible(true)}
//                             onBlur={() => props.visible(false)}
//                             onChange={() =>
//                                 props.validate(
//                                     "confirmPassword",
//                                     getValues,
//                                     setError,
//                                     clearErrors
//                                 )
//                             }
//                         />
//                     )}
//                 </PasswordPopover>
//                 {errors.confirmPassword && (
//                     <p className="error"> {errors.confirmPassword.message} </p>
//                 )}

//                 <label className="row">
//                     <input
//                         name="agree"
//                         type="checkbox"
//                         ref={register({ required: true })}
//                     />
//                     <span>I Agree to Term of Services and Privacy Policy * </span>
//                 </label>
//                 {errors.agree && <p className="error"> Aggrement Required </p>}

//                 <label className="row">
//                     <input type="checkbox" name="subscribe" ref={register()} />
//                     <span>Subscribe to Newsletter</span>
//                 </label>

//                 <button
//                     type="button"
//                     onClick={handleSubmit(onSubmit)}
//                     disabled={formState.isSubmitting}
//                 >
//                     Sign Up
//         </button>
//             </form>
//         </div>
//     );
// }

// function App() {
//     return <Form />;
// }

// export default App;

// import Styles from "./style.module.css"

// import React from "react"

// class From extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

    // return (
    //     <div className={Styles.forms} id="overlay">
    //             <h2>CONTACT US</h2>
    //         <form onsubmit="">

    //             <div >
    //                 <label For="name">Name</label>
    //                 <input type="text" id="name" />
    //                 <small className={Styles.error}></small>
    //             </div>

    //             <div >
    //                 <label For="Email">Email</label>
    //                 <input type="text" id="email" />
    //                 <small className={Styles.error}></small>
    //             </div>

    //             <div className={Styles.form_group}>
    //                 <label For="message">Message</label>
    //                 <textarea type="text" id="message" rows="6"> </textarea>
    //                 <small className={Styles.error}></small>
    //             </div>

    //             <div className={Styles.center}>
    //                 <input type="submit" id="Send Message" />
    //                 <p id="succes"> </p>
    //             </div>
    //         </form>

    //     </div>
    // );
// }

//         <div className={Styles.form}>
//             <div className={Styles.up}>
//                 <p>CONTACT US</p>
//             </div>
//             <div className={Styles.down}>
//                 <div className={Styles.nama} align="center">
//                     <label for="nama" className={Styles.form_label}>Name</label><br></br>
//                     <input type="text" className={Styles.form_control} name="Nama" id="Nama" requr></input>
//                 </div>

//                 <div className={Styles.email} align="center">
//                     <label for="email" className={Styles.form_label}>Email</label><br></br>
//                     <input type="email" className={Styles.form_control} name="email" id="email"></input>
//                 </div>

//                 <div className={Styles.mess} align="center">
//                     <label for="message" className={Styles.form_label}>Message</label><br></br>
//                     <input type="text-area" className={Styles.form_control} name="message" id="message"></input>
//                 </div>

//                 <div className={Styles.button} align="center">
//                     <input type="submit" className={Styles.button1} name="submit" value="SUBMIT"></input>
//                 </div>

//             </div>
//         </div>