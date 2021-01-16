import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './Login.css';
import axios from "axios";
import FormError from "../../FormError";
import TextInput from "../../TextInput";

 export default function UserLogin() {
     // const [success, setSuccess] = useState(null);
     const [status, setStatus] = useState("idle");
     const {register, handleSubmit, errors} = useForm();
     // console.log("Errors:", errors);

     async function userLogin(data) {
         setStatus("submitting");
         // console.log("What did the user fill in:", data);

         try {

             const response = await axios.post('https://localhost:8080/login', {
                 first_name: data.name,
                 username: data.username,
                 email: data.email,
                 password: data.password,
             });
             // setSuccess(true);
             setStatus("success");

             console.log("Response from API?", response);
         } catch (error) {
             // setSuccess(false);
             setStatus("error");
         }

     }

     // if (success) {
     //     return <h1>You are logged in</h1>;
     // }

     return (
     <>
     <div>
         <h2>Log in</h2>
         {status === "success" && (
             <h3 className="log-in-success">
                 You are logged in!
             </h3>
         )}
         {["idle", "submitting", "error"].includes(status) && (

         <form className="login-form" onSubmit={handleSubmit(userLogin)}>
             <TextInput
                 register={register}
                 validationOption={{
                     required: true,
                     minLength: 3,
                     pattern: /^[a-zA-Z ]*$/,
                 }}
                 labelText="First name"
                 inputName="name"
             />
             <FormError
                 condition={errors.name?.type === "required"}
                 message={"First name is required"}
             />
             <FormError
                 condition={errors.name?.type === "minLength"}
                 message={"First name must have 3 or more characters"}
             />
             <FormError
                 condition={errors.name?.type === "pattern"}
                 message={"First name should consist of a-z characters only"}
             />

             <TextInput
                 register={register}
                 validationOption={{
                     required: true,
                     minLength: 3,
                 }}
                 labelText="Username"
                 inputName="username"
             />
             <FormError
                 condition={errors.username?.type === "required"}
                 message={"Username is required"}
             />
             <FormError
                 condition={errors.username?.type === "minLength"}
                 message={"Username must have 3 or more characters"}
             />
             <TextInput
                 register={register}
                 validationOptions={{
                     validate: (value) => value.includes("@"),
                     // required: true,
                 }}
                 labelText="Email"
                 inputName="email"
             />
             <FormError
                 condition={errors.email?.type === "validate"}
                 message={"Oops, you forgot @"}
             />
             <TextInput
                 register={register}
                 validationOption={{
                     required: true,
                     minLength: 6,
                 }}
                 labelText="password"
                 inputName="password"
             />
             <FormError
                 condition={errors.password?.type === "required"}
                 message={"Password is required"}
             />
             <FormError
                 condition={errors.password?.type === "minLength"}
                 message={"Password must have 6 or more characters"}
             />

             <input name="login" type="submit" disabled={status ==="submitting"}/>
         </form>
         )}
     </div>
    </>
 );
}