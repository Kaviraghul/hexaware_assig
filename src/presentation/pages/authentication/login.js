import { useState } from "react";

export default function LoginPage() {
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

    return (
        <div>
            <form>
                <h1>Hexaware Assignment</h1>
                <h3>Username</h3>
                <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter Username"
                    value={state.userName}
                    onChange={handleChange}
                />
                <h3>Password</h3>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <br />
                <div>
                    <button
                        disabled={submit}
                        onClick={null}
                    >
                        Submit
                    </button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    );
}
