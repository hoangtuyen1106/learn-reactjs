import { useState } from "react";

export default function Login() {
   // const [enteredEmail, setEnterrdEmail] = useState('');
   // const [enteredPassword, setEnterrdPassword] = useState('');

   const [enteredValues, setEnteredValues] = useState({
      email: "",
      password: "",
   });

   const [didEdit, setDidEdit] = useState({
      email: false,
      password: false,
   });

   const emailIsInvalid =
      didEdit.email && !enteredValues.email.includes("@");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(enteredValues);

      // setEnteredValues({
      //    email: "",
      //    password: "",
      // });
   };

   const handleInputChange = (identifier, value) => {
      setEnteredValues((preValues) => ({
         ...preValues,
         [identifier]: value,
      }));
      setDidEdit((prevEdit) => ({
         ...prevEdit,
         [identifier]: false,
      }));
   };

   const handleInputBlur = (identifier) => {
      setDidEdit((prevEdit) => ({
         ...prevEdit,
         [identifier]: true,
      }));
   };

   // const handleEmailChange = (e) => {
   //    setEnterrdEmail(e.target.value);
   // };

   // const handlePasswordChange = (e) => {
   //    setEnterrdPassword(e.target.value);
   // };

   return (
      <form onSubmit={handleSubmit}>
         <h2>Login</h2>

         <div className="control-row">
            <div className="control no-margin">
               <label htmlFor="email">Email</label>
               <input
                  id="email"
                  type="email"
                  name="email"
                  onBlur={() => handleInputBlur("email")}
                  onChange={(event) =>
                     handleInputChange("email", event.target.value)
                  }
                  value={enteredValues.email}
               />
               <div className="control-error">
                  {emailIsInvalid && <p>Please enter a valid email address.</p>}
               </div>
            </div>

            <div className="control no-margin">
               <label htmlFor="password">Password</label>
               <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={(event) =>
                     handleInputChange("password", event.target.value)
                  }
                  value={enteredValues.password}
               />
            </div>
         </div>

         <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
         </p>
      </form>
   );
}
