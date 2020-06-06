import { useState, useEffect } from 'react';

const useForm = (initialState, validate, next) => {
   const [values, setValues] = useState(initialState)
   const [errors, setErros] = useState({})
   const [isSubmitting, setisSubmitting] = useState(false)


   useEffect(() => {
       if (isSubmitting) {
           const isErrors = Object.keys(errors).length !== 0
           if (isErrors) {
               setisSubmitting(false)
           } else {
               next()
               setisSubmitting(false)
               setValues(initialState)
           }
       }
   }, [errors, next, isSubmitting, initialState])

    const handleKeyDown = event => {
        if (event.keyCode === 13 && event.ctrlKey) {
            next()
        } 
    }

    
    const handleChange = event => {
        event.persist()
        setValues(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }))
    }
    
    
    const handleSubmit = event => {
        event.preventDefault()
        const errors = validate(values)
        setErros(errors)
        setisSubmitting(true)
        //next()
    }


    return {
        handleSubmit, 
        handleKeyDown,
        handleChange,
        values,
        errors
    }
}
 
export default useForm;