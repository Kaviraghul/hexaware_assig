
import "./login.css";
import LoginForm from "../../components/LoginForm/login_form.js";

export default function LoginPage() {
    return (
        <div className="login-screen-wrapper" >
            <div className="login-screen-logo-heading" >
              <img className="login-screen-logo" src="/assets/svg/hexaware-logo.svg" ></img>
              <h1 className="login-form-heading" >Hexaware<br />Assignment</h1>
            </div>
            <LoginForm />
        </div>
    );
}
