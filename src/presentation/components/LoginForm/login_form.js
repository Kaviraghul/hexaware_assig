import { useState } from "react";
import "./login_form.css";

export default function LoginForm(){

    const [state, setState] = useState({
        userName: "",
        password: "",
        successMessage: null
    });

    const [submit, setSubmit] = useState(true);

    const handleChange = (e) => {
        const { id, value } = e.target;
        
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }));

        if (id === "userName") setSubmit(!(value.trim() && state.password.trim()));
        
        if (id === "password") setSubmit(!(state.userName.trim() && value.trim()));
        
    };
    return  <div className="login-form-wrapper" >
        <form>
               <h2 className="form-heading" >Username</h2>
               <div className="form-input-wrapper" >
                <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter Username"
                    value={state.userName}
                    onChange={handleChange}
                />
               </div>
               
               <h2 className="form-heading" >Password</h2>
               <div className="form-input-wrapper" >
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={state.password}
                    onChange={handleChange}
                />
               </div>
               <br />
               <div className="button-container">
    <button
        className="button-submit"
        disabled={submit}
        onClick={null}
    >
        Submit
    </button>
    <button className="button-cancel">
        Cancel
    </button>
</div>

           </form>
    </div>
}