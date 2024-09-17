import { useState } from "react";
import "./login_form.css";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS
import useAuth from "../../../context/auth_context";

export default function LoginForm() {

    const isUserLoggedIn  = useAuth();
    const navigate = useNavigate(); 

    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: "",
        successMessage: null,
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
                await doSignInWithEmailAndPassword(userCredentials.email, userCredentials.password);
                setUserCredentials((prevState) => ({
                    ...prevState,
                    successMessage: "Login successful",
                }));
                toast.success("Login successful!");
                navigate("/home"); 
            } catch (error) {
                setUserCredentials((prevState) => ({
                    ...prevState,
                    errorMessage: error.message,
                }));
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
            successMessage: null
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
