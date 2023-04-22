import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png"
import Loader from "./loader"

function User(){
    const [nameValue, setNameValue] = useState ({
        name:''
    })
    const [loading, setLoading] = useState('hidden')
  
    function handleInput(event){
       setNameValue ({[event.target.id] : event.target.value})
    }
    
    const navigate = useNavigate()

    const [err, setErr] = useState('')
    async function handleForm(event){
        event.preventDefault()
        try {
    setLoading('visible')
    const {data} = await axios.post('https://congrats-hb-api.onrender.com/feeds', {name : nameValue.name})
    setLoading('hidden')
    navigate(`/user/${data}`)
        } catch (error) {
            setErr (error.response.data.msg)
        }        
    }

    return(
        <div className="home">
            <div className="logo">
                <div>
                   <img src={logo} alt="logo"></img>
                   <h3>Congrats</h3>   
                </div>       
            </div>
    <form id="form" onSubmit={handleForm}>
        <div className="items-container">
            <label 
            htmlFor="name"
            >veuillez introduire votre nom ici :</label>
            <input 
            type="text"
            name="name" 
            id="name" 
            value={nameValue.name}
            onChange={handleInput}
            autoComplete="off"
            ></input>
            <input type="submit" value="Expédier" 
            ></input>
        </div>
        <div className={ err === '' ? '' : "errors"}>
            <p>
                {err || 
                <div style={{visibility: loading}}>
                    <Loader />
                </div>}
            </p>
        </div>
        <div>
            <small>
                tous droits réservés, créé par Losange
            </small>
        </div>
        <div className="overlay-user">

        </div>
    </form>
        </div>
    )
}

export default User