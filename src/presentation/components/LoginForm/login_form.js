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

    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: "",
    });

    const [submit, setSubmit] = useState(true);
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;

        setUserCredentials((prevState) => ({
            ...prevState,
            [id]: value
        }));

        if (id === "email") setSubmit(!(value.trim() && userCredentials.password.trim()));
        if (id === "password") setSubmit(!(userCredentials.email.trim() && value.trim()));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(userCredentials);
                toast.success("Login successful!");
                navigate("/home"); 
            } catch (error) {
                toast.error(`Login failed: ${error.message}`);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const onCancel = async (e) => {
        e.preventDefault();
        setUserCredentials({
            email: "",
            password: "",
        });
        setSubmit(true);
    }

    return (
        <>
            {isUserLoggedIn && <Navigate to="/home" replace={true} />}
            <div className="login-form-wrapper">
                <form>
                    <h2 className="form-heading">Email</h2>
                    <div className="form-input-wrapper">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={userCredentials.email}
                            onChange={handleChange}
                        />
                    </div>

                    <h2 className="form-heading">Password</h2>
                    <div className="form-input-wrapper">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={userCredentials.password}
                            onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div className="button-container">
                        <button
                            className="button-submit"
                            disabled={submit}
                            onClick={onSubmit}
                        >
                            Submit
                        </button>
                        <button className="button-cancel" onClick={onCancel} >Cancel</button>
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
