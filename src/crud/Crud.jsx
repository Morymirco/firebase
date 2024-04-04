import React, { useEffect, useState } from 'react';
import { db } from '../firebaseconfig';
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from 'firebase/firestore'
const Crud = () => {
    const [nom, setNom] = useState("")
    const [fetchdata, setfetchdata] = useState([])
    const [id,setid]=useState();

    //creation de la reference de la base de données
    const dbref = collection(db, "CRUD")
    //ajout de la donnée
    const add = async () => {
        const addData = await addDoc(dbref, { Nom: nom })
        if (addData) {
            alert("envoyer avec succès")
            window.location.reload()
        }
        else {
            alert("erreur")
        }
    }
    const handlechange = (e) => {
        setNom(e.target.value)
    }

    //Recuperation des donnée
    const fetch = async () => {
        const snapshot = await getDocs(dbref)
        const fetchdata = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setfetchdata(fetchdata)
        console.log(fetchdata)
    }

    useEffect(() => {
        fetch()
    }, [])
//Modification de la donnée
const passData = async (id)=>{
    const matchid = fetchdata.find((data)=>{
        return data.id ==id
    })
    setNom(matchid.Nom)
    setid(matchid.id)
}

const update =async ()=>{
    const updateref = doc(dbref,id)
    try{
        await updateDoc(updateref,{Nom:nom})
        alert("modification effectuer")
        window.location.reload();
    }catch(error){
        alert(error,"modification non effectuer")
    }
}
    return (
        <div>
            <input type="text" className="form-control mb-3" placeholder="nom" onChange={handlechange} value={nom}/>
            <button className="btn btn-primary" onClick={add}>Ajouter</button>
            <button className="btn btn-success mx-3" onClick={update}> Appliquer la modification</button>

            <div className="mt-5">
            <ul className='list-group list-group-flush d-flex justify-content-around mt-3'>
                {
                    fetchdata.map((data)=>(
                        <li key={data.id} className='list-group-item d-flex justify-content-between'>
                        {data.id}   <p className='mx-5'> {data.Nom} &nbsp; &nbsp;</p>
                        <div className='d-flex gap-3'>
                        <button className="btn btn-warning"  onClick={()=>{passData(data.id)}}>Modifier <i className='fa fa-edit text-secondary m-1'></i></button>
                        <button className="btn btn-danger"  onClick={()=>{handledelete(index)}}>supprimer <i className='fa fa-trash text-success m-2'></i></button>
                        </div>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    );
}


export default Crud;
