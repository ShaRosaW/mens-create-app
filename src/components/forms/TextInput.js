import React from "react";

export default function TextInput(props) {
    // console.log(props);
    return (
        <>
            <label className="form-label" htmlFor={props.inputName}>
                hoi{props.labelText}
            </label>
            <input
                className="form-text-input"
                name={props.inputName}
                type="text"
                ref={props.register(props.validationOption)}
            />
        </>
    );
}