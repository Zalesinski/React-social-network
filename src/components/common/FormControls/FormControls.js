import React from "react";
import style from "./FormControls.module.css"

const FormControl = ({input, meta, element, ...props}) => {
        const hasError = meta.touched && meta.error;
        return (
            <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
                {props.children}<br/>
                {hasError && <span>{meta.error}</span>}
            </div>
        )
}

export const Textarea = (props) => {
    const {input, meta, element, ...restprops} = props
    return <FormControl {...props}><textarea {...input} {...restprops}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, element, ...restprops} = props
    return <FormControl {...props}><input {...input} {...restprops}/></FormControl>
}