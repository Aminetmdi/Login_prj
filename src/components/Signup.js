    import React, { useState ,useEffect } from 'react';
    import styles from './Signup.module.css'
    import { validate } from './validate';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { notify } from './toast'
    import { Link } from 'react-router-dom';

    
    const Signup = () => {
        const [errors , setErrors] = useState({})
        const [touched , setTouched] = useState({})

    const [data , setData] = useState({
        name : '' ,
        email :'' ,
        password : '',
        confrimPassword : '' ,
        isAccepted : false 
    })


    useEffect(()=>{
        setErrors(validate(data , 'signup'))
    },[data , touched])


    const changeHandler = event => {
        if(event.target.name === 'isAccepted'){
            setData({...data, [event.target.name] : event.target.checked})
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
    }

    const focusHandler = event => {
        setTouched ({...touched , [event.target.name]: true })
    } 


    const submitHandler = event => {
        event.preventDefault();
        notify()
        if(!Object.keys(errors).length){
            notify('You signed in successfuly' , 'success')
        }else{
            notify('Invalid data !' , 'error')

            setTouched({
                name:true,
                email:true , 
                password : true ,
                confrimPassword:true ,
                isAccepted : true
            })
        }
    }
    
        return (
            <div className={styles.container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h2 className={styles.header}>SignUp</h2>
                    <div className={styles.formField}>
                        <label>Name</label>
                        <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput } 
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                        {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>
                    
                    
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
                    
                    
                    <div className={styles.formField}>
                        <label>Confrim Password</label>
                        <input
                        className={(errors.confrimPassword && touched.confrimPassword) ? styles.uncompleted : styles.formInput } 
                        type='password' 
                        name='confrimPassword' 
                        value={data.confrimPassword}
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                        {errors.confrimPassword && touched.confrimPassword && <span>{errors.confrimPassword}</span>}

                    </div>
                    
                    
                    <div className={ styles.formField} >
                        <div className={ styles.checkboxContainer } >
                        <label>I accepted trems of privacy policy</label>
                        <input
                        type='checkbox'
                        name='isAccepted'
                        value={data.isAccepted} 
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                        </div>
                        {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                    </div>
                    
                    
                    <div className={styles.formButtons}>
                        <Link to='/login'>Login</Link>
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        );
    };

    export default Signup;