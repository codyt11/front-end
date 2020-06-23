import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import {Link, Route} from "react-router-dom"
import styled from 'styled-components'


const Client = () => {
    const [post, setPost] = useState()
    const [clientState, setClientState] = useState({
        name: '',
        password: '',
      })

      

      const formSchema = Yup.object().shape({
        name: Yup.string().min(2, "Requires at least 2 characters"),
        password: Yup.string().min(8, "Requires a minimum of 8 characters")
    })

    
    const [errors, setErrors] = useState({
        name: '',
        password: ''
    });
    
   

   


    const validateChange = (e) => {
        if(e.target.name === 'name' || e.target.name === 'password'){
            Yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(isValid => {
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch(err => {
                console.log(err.errors)
                setErrors({...errors, [e.target.name]:err.errors[0]})
                
            })
        }

    }

    const handleChange = e => {
        e.persist()
        setClientState({...clientState, [e.target.name]: e.target.value})
        validateChange(e)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('https://reqres.in/api/users', clientState)
        .then(res => {
            console.log(res.data)
            setPost(res.data);
            setClientState({
                name: '',
                password: ''
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    const Input = styled.input`
        width: 100%;
        padding: .5em;
        font-size: 1em;
        border-radius: 10px;
        &:hover{
            background: black;
            color: white;
        }
    `;
    const Name = styled.div`
        width: 100%;
    `;

    const Password = styled.div`
        width: 100%;
    `;
    const LogIn = styled.div`
        width: 100%;
    `;
    const InputName = styled.input`
        width: 100%;
        padding: .5em;
        font-size: 1em;
        border-radius: 10px;
    `;
    const InputPassword = styled.input`
        width: 100%;
        padding: .5em;
        font-size: 1em;
        border-radius: 10px;
    `;

    return (
        <form onSubmit={handleSubmit}>
            <LogIn>
                <h1>Log In</h1>
                <Name>
                    <label htmlFor="name">
                        <InputName type='text' placeholder='User Name' name='name' value={clientState.name} onChange={handleChange} />
                        {errors.name.length > 2 ? <p className="error">{errors.name}</p>: null}
                    </label>
                </Name>
                <Password>
                    <label htmlFor="password">
                        <InputPassword type='text' placeholder='Password' value={clientState.password} name='password' onChange={handleChange} />
                        {errors.password.length > 2 ? <p className="error">{errors.password}</p>: null}
                    </label>
                </Password>
                
                <div>
                    <Input data-cy="submit" type='submit' />
                </div>
            </LogIn>
        </form>
    )
}

export default Client;