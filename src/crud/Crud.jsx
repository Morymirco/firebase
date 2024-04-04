import React, { useState } from 'react';
import { db } from '../firebaseconfig';
import {collection,doc,addDoc,getDocs,deleteDoc,updateDoc} from 'firebase/firestore'
const Crud = () => {
    const [nom,setNom]=useState("")

        //creation de la reference de la base de données
    const dbref = collection(db,"CRUD")
    //ajout de la donnée
    const add = async ()=>{
        const addData = await addDoc(dbref , {Nom:nom})
        if(addData){
            alert("envoyer avec succès")
            window.location.reload()
        }
        else{
            alert("erreur")
        }
    }
const handlechange=(e)=>{
    setNom(e.target.value)
}
    return (
        <div>
            <input type="text" className="form-control mb-3" placeholder="nom" onChange={handlechange}/>
            <button className="btn btn-primary" onClick={add}>Ajouter</button>
        </div>
    );
}

export default Crud;
