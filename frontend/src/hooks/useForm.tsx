import { useState } from "react";

// Parameters can be any callback function and whatever initialState defined in 
// each form where the useForm hook is used.
export const useForm = (callback: any, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    // interface "React.ChangeEvent<T = Element>"", Provides special properties and 
    // methods for manipulating the options, layout, and presentation of elements.
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values, [event.target.name]:
                event.target.value
        });
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    }
// Exports to be used on other forms
    return {
        onChange,
        onSubmit,
        values,
    };

}