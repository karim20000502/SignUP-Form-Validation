import React, { useState } from 'react'
import './SignupForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Validation from './Validation'

const SignupForm = () => {
    const[values, setValues]=useState({
        email:'',
        password:'',
        confirm_password:''
    })
    const [errors, setErrors]= useState({

    })
    const handleInput = (e) =>{
        setValues({...values, [e.target.name]: [e.target.value]})

    }
    function handleValidtion(e){
        e.preventDefault()
        setErrors(Validation(values))
    }
  return (
    <div className='singnup_container w-100
     d-flex justify-content-center mt-5'>
        <div className='signup_form mt-5 w-50'>
            <h1 className='alert alert-primary'>SignUP Form Validation</h1>
            <div className='form'>
                <form className='border' onSubmit={handleValidtion}>
                    <label htmlFor="email"><strong>Email :</strong></label>
                    <input className='form-control' type="email" placeholder="Enter Email" onChange={handleInput} name="email"/>
                    {errors.email && <h5 style={{color:"red"}}>{errors.email}</h5>}
                    <label htmlFor="password"><strong>Password :</strong></label>
                    <input className='form-control' type="password" placeholder="Enter Password" onChange={handleInput} name="password"/>
                    {errors.password && <h5 style={{color:"red"}}>{errors.password}</h5>}

                    <label htmlFor="Corfirm Password"><strong>Corfirm Password :</strong></label>
                    <input className='form-control' type="password" placeholder="Corfirm Password" onChange={handleInput} name="corfirm_password"/>
                    {errors.confirm_password && <h5 style={{color:"red"}}>{errors.confirm_password}</h5>}

                    <div className='mt-3'>
                        <button className='btn btn-danger w-50'>Cancel</button>
                        <button className='btn btn-success w-50'>Sin Up</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default SignupForm