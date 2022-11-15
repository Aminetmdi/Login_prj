export const validate = (data , type) => {
    const errors = {} ;

  

    // EMAIL 
    if(!data.email){
        errors.email = 'Email required'
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'Email address is invalid'
    }else{
        delete errors.email
    }

    // PASSWORD 
    if(!data.password){
        errors.password = 'Password is required'
    }  else if(data.password.length < 6){
        errors.password = 'Password need to be 6 charackter or more'
    }else{
        delete errors.password
    }

   

    if (type === 'signup') {
    // NAME
    if(!data.name.trim()){
        errors.name = 'Username required'
    }else{
        delete errors.name
    }
         //CONFRIM PASSWORD 
    if(!data.confrimPassword){
        errors.confrimPassword = 'Confrim the password'
    }else if( data.confrimPassword !== data.password ){
        errors.confrimPassword = 'Password do not match'
    }else{
        delete errors.confrimPassword
    }
    

    // CHECK LIST 
    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted='Accept our regulations'
    }
    }

    return errors

}