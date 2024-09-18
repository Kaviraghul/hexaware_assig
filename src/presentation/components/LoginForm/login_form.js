import { useState } from "react";
import "./login_form.css";
import { doSignInWithEmailAndPassword } from "../../../services/firebase_user_services";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../../context_providers/authentication_provider";

export default function LoginForm() {

    const isUserLoggedIn  = useAuth();
    const navigate = useNavigate(); 

    const [loginCredentials, setloginCredentials] = useState({
        email: "",
        password: "",
    });

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setloginCredentials((prevState) => ({
            ...prevState,
            [id]: value
        }));

        if (id === "email") setIsSubmitDisabled(!(value.trim() && loginCredentials.password.trim()));
        if (id === "password") setIsSubmitDisabled(!(loginCredentials.email.trim() && value.trim()));
    };

    const onisSubmitDisabled = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(loginCredentials);
                toast.success("Login successful!");
                navigate("/home"); 
            } catch (error) {
                toast.error(`Login failed: ${error.message}`);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        setloginCredentials({
            email: "",
            password: "",
        });
        setIsSubmitDisabled(true);
    }

    return (
        <>
            {isUserLoggedIn && <Navigate to="/home" replace={true} />}
            <div className="login-form-wrapper">
                <form>
                    <h1 className="login-form-heading" >Hexaware<br />Assignment</h1>
                    <h2 className="form-heading">Email</h2>
                    <div className="form-input-wrapper">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={loginCredentials.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <h2 className="form-heading">Password</h2>
                    <div className="form-input-wrapper">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={loginCredentials.password}
                            onChange={handleInputChange}
                        />
                    </div>
                   
                    <div className="button-container">
                        <button
                            className="button-submit"
                            disabled={isSubmitDisabled}
                            onClick={onisSubmitDisabled}
                        >
                            Submit
                        </button>
                        <button className="button-cancel" onClick={handleCancel} >Cancel</button>
                    </div>
                </form>
            </div>

            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
