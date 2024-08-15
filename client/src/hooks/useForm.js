import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.name}));
    };

    const onSubmit = (e) => {
        e.preventDefault();
         console.log('data', values);
        onSubmitHandler(values);
    }

    return {
        values,
        changeHandler,
        onSubmit
    }
}