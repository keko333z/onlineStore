import { Field } from "formik";

export function InputField ({classNameValue, fieldName, label, error, touch, type="text"}) {
    return <>
            <label htmlFor={fieldName}>{label}</label>
            <Field className= {classNameValue} name={fieldName} type={type}/>
            {error && touch ? 
                <div className="field-error">{error}</div> 
                : <div className="field-error"></div>}
    </>
}