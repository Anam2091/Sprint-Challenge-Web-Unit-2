import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




const formSchema = Yup.object().shape({
    Email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  
    password:Yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
})



const Home = props => {
    const [homeform, sethomeform] = useState({Email:"",  password:""})

    const [errors, setErrors] = useState({
        Email: "",
        password:""
        
      });
      useEffect(() => {
        /* We pass the entire state into the entire schema, no need to use reach here. 
        We want to make sure it is all valid before we allow a user to submit
        isValid comes from Yup directly */
        formSchema.isValid(homeform).then(valid => {
            console.log(valid)
          //setButtonDisabled(!valid);
        });
      }, [homeform]);
    const handleNameChange = e => {
        sethomeform({ ...homeform, Email: e.target.value });
        Yup
          .reach(formSchema, e.target.name)
          //we can then run validate using the value
          .validate(e.target.value)
          // if the validation is successful, we can clear the error message
          .then(valid => {
            setErrors({
              ...errors,
              Email: ""
            });
          })
          .catch(err => {
            if(err){
              setErrors({
                ...errors,
                Email: err.errors[0]
              });
            }
          });
    }

    const handlePasswordChange = e => {
        sethomeform({ ...homeform, password: e.target.value });
        Yup
          .reach(formSchema, e.target.name)
          //we can then run validate using the value
          .validate(e.target.value)
          // if the validation is successful, we can clear the error message
          .then(valid => {
            setErrors({
              ...errors,
              password: ""
            });
          })
          .catch(err => {
            if(err){
              setErrors({
                ...errors,
                password: err.errors[0]
              });
            }
          });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(homeform);
        //props.AddPeople({
        //...formysecOn 
        //})
      };
    return(
        <div>
            
            <form onSubmit={event => handleSubmit(event)}>
                
                <label>
                    
                    <input id="abc" type="email" name="Email" onChange={handleNameChange}> 
                    </input>
                    {errors.Email.length > 0 ? (<p className="error">{errors.Email}</p>) : null}

                    <input id="def" type="password" name="password" onChange={handlePasswordChange}> 
                    </input>
                    {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
                </label>





                <Link to="/data"><Button id= "buttid"variant="warning" type='submit'>Login</Button></Link>
                
            </form>
        </div>
    )
}














export default Home;