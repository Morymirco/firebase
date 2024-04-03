import React, { useState } from 'react';
import app from '../firebaseconfig';
import {getDatabase,set,push,ref} from "firebase/database"
// import { useNavigate } from 'react-router-dom';

const Writecomponent = () => {

    // const navigate =useNavigate()

    let [inputvalue , setInputValue1]=useState("")
    let [inputValue2 , setinputValue2] = useState("");

    const savedata = async ()=>{
        const db = getDatabase(app)

        const newDocRef = push(ref(db,"odc/reactjs"))

        set(newDocRef,{
            fruitName:inputvalue,
            fruitDefinition:inputValue2
        }).then(()=>{
            alert("data saved successfully")
        }).catch((error)=>{
            alert("error :",error.message)
        })
    }
    return (
        <div>
            <h1>Enregistrement</h1>
            <input type="text" value={inputvalue}  onChange={(e)=>setInputValue1(e.target.value)}/>
            <br />
            <input type="text" value={inputValue2}  onChange={(e)=>setinputValue2(e.target.value)}/>
            <button onClick={savedata}>Enregistrer</button>

            <br />
            <br />
            <br />

            {/* <button className="button1" onClick={()=>{navigate("/updateread")}}>Mise à jour</button><br />
            <button className="button2" onClick={()=>{navigate("/updateread")}}>Lectutre</button> */}
        </div>
    );
}

export default Writecomponent;
