import React, { useState ,useEffect } from 'react';
import styles from './Signup.module.css'
import { Link } from 'react-router-dom';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast'


const Login = () => {
    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

const [data , setData] = useState({
    email :'' ,
    password : '',
})


useEffect(()=>{
    setErrors(validate(data , 'login'))
},[data , touched])


const changeHandler = event => {
      setData({...data , [event.target.name] : event.target.value})
}

const focusHandler = event => {
    setTouched ({...touched , [event.target.name]: true })
} 


const submitHandler = event => {
    event.preventDefault();
    notify()
    if(!Object.keys(errors).length){
        notify('You Logged in successfuly' , 'success')
    }else{
        notify('Invalid data !' , 'error')

        setTouched({
            email:true , 
            password : true ,   
        })
    }
}

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Login</h2>
               
                
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                    className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput } 
                    type='email' 
                    name='email' 
                    value={data.email}
                    onChange={changeHandler}
                    onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>
                
                
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                    className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput } 
                    type='password' 
                    name='password'
                    value={data.password}
                    onChange={changeHandler}
                    onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}

                </div>
                
          
                
                <div className={styles.formButtons}>
                    <Link to='/signup'>Sign Up</Link> 
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;