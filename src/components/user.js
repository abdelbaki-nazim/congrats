import React, { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import logo from "../assets/logo.png"

function User(){
    const [nameValue, setNameValue] = useState ({
        name:''
    })
  
    function handleInput(event){
       setNameValue ({[event.target.id] : event.target.value})
    }

    const [err, setErr] = useState('')
    async function handleForm(event){
        event.preventDefault()
        try {
    const {data} = await axios.post('https://congrats-hb-api.onrender.com/feeds', {name : nameValue.name})
    return redirect(`/user/${data}`)
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
                {err}
            </p>
        </div>
        <div>
            <small>
                tous droits réservés, créé par Losange
            </small>
        </div>
    </form>
        </div>
    )
}

export default User