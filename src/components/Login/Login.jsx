import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {getCaptcha, login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormControls/FormControls.module.css";
import {captcha} from "./Login.module.css";
import classNames from "classnames"

const maxLength28 = maxLengthCreator(28);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[requiredField, maxLength28]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input}
                       validate={[requiredField, maxLength28]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.captcha &&
            <div><img className={captcha} src={props.captcha} alt="captcha"/><br/>
            <Field placeholder={"Symbols from image"} component={Input} name={"captcha"} validate={[requiredField]}/></div>}
            {props.error && <div className={classNames(style.formControl, style.error) }>{props.error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginFormRedux = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isLoggedIn) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginFormRedux onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {login, getCaptcha})(Login);