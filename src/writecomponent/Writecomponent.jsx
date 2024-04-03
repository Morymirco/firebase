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
        <marquee behavior="scroll" direction="right" className="text-success">TODOS</marquee>
         <div className='border-top p-4 border-secondary'>
            <h1 className='text-secondary mb-4' >Enregistrement</h1>
            <input type="text" className="form-control border-primary" value={inputvalue}  onChange={(e)=>setInputValue1(e.target.value)}/>
            <br />
            <input type="text" value={inputValue2} className="form-control border-primary"  onChange={(e)=>setinputValue2(e.target.value)}/>
            <button onClick={savedata} className='btn btn-success mt-3'>Enregistrer</button>

            <br />
            <br />
            <br />

            {/* <button className="button1" onClick={()=>{navigate("/updateread")}}>Mise à jour</button><br />
            <button className="button2" onClick={()=>{navigate("/updateread")}}>Lectutre</button> */}
        </div>
       </div>
    );
}

export default Writecomponent;
