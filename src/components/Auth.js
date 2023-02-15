import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActionTpyesv } from "../store/auth/Auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  console.log(dispatch);
  const [formState, setFromState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setFromState((prev) => ({ ...prev, [name]: event.target.value }));
    };
  };
  const submitHnadler = (event) => {
    event.preventDefault();
    if (
      formState.email === "tima@gmail.com" &&
      formState.password === "123123"
    ) {
      dispatch({
        type: authActionTpyesv.LOG_IN,
        payload: formState.email,
      });
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHnadler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
