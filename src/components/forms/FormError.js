import React from "react";

export default function FormError(errors){
     return (
        <>
            {errors.condition && (
                <p className="form-error">{errors.message}</p>
            )};
        </>
     )
}