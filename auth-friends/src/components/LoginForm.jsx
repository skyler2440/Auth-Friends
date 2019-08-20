import React from "react";
import { connect } from 'react-redux'
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {signIn} from "../actions"



function LogFrm({ errors, touched }) {
  const token = localStorage.getItem('token');
  return (
    <div className="form-card">
    <h1>Login</h1>
      <Form className="ui form">

        <div className="field">
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="text" name="username" placeholder="User Name" />
        </div>

        <div className="field">
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <button className="ui button" type="submit" onClick={() => {
      
        }}>
          Login
        </button>
        
      </Form>
    </div>
  );
}




const LoginForm = withFormik({

  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },


  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("is required"),
    password: Yup.string().required("is required")
  }),

  handleSubmit(values, formikBag) {
  // console.log(formikBag);
  formikBag.props.signIn(values)
//   .then(() => {formikBag.props.props.history.push("/mytech")});
  }

})(LogFrm);




// const mapPropsToState= (state) => ({
//   ...state,
//   user: state.authReducer.user
// })


export default connect(null, {signIn})(LoginForm);