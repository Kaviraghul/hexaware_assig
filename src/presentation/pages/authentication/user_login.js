
import "./user_login.css";
import LoginForm from "../../components/LoginForm/login_form.js";

export default function Login() {
    return (
        <div className="login-screen-wrapper" >
            <div className="login-screen-logo-heading" >
              <h1 className="login-form-heading" >Hexaware<br />Assignment</h1>
            </div>
            <LoginForm />
        </div>
    );
}
