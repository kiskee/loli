import React, {useState} from 'react'
import axios from 'axios'
import md5 from 'md5'



function Login({login,setlogin}){
     //Hooks
     const[useremail, setUseremail]=useState('')
     const[password, setPassword]=useState('')

     const logi = async credentials =>{
        const {data} = await axios.post('/api/usuario/logi', credentials)
        return data
    }
    
    const logini = async (event)=>{ 
    try {  
      const useri = await logi({
        useremail
      })
      //setlogin(useri.shift().password)
      if(useri[0].password==md5(password)){
       
        window.sessionStorage.setItem(
          'loggedAppUser', JSON.stringify(useri.shift().password)
        )
        setlogin(md5(document.querySelector('#loginName').value))
      }
    } catch (e) {
       console.log(e)
    }
    }

   

    
      return(
        <div className='container'>
              <h2 className='mt-4 text-danger'>Login</h2>
            <div className='row'>
              <div className='col-sm-6 offset-3'>
                  <div className='mb-3'>
                      <label htmlFor='email' className='form-label'>Email</label>
                      <input type="text" className='form-control' value={useremail} onChange={(e) => {setUseremail(e.target.value)}}></input>
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='password' className='form-label'>Password</label>
                      <input type="password" id='loginName' className='form-control' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                  </div>
                  <button onClick={logini} className="btn btn-lg btn-danger">LOGIN</button>
                  <center>
                  <p className="text-white mt-4">Have an account?</p>
                  <h6><a className="text-info" href="add">Register here</a></h6>
                </center>
              </div>
          </div>           
        </div>
    )
}

export default Login