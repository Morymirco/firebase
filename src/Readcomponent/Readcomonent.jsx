import React, { useState } from 'react';
import app from '../firebaseconfig';
import { getDatabase,ref,get } from 'firebase/database';
const Readcomonent = () => {


    let [fruitArray,setFruitArray]=useState([])

    const fetchData = async ()=>{
        const db = getDatabase(app)
        const dbRef = ref(db,"odc/reactjs")
        const snapshot = await get(dbRef)
        if(snapshot.exists()){
            setFruitArray(Object.values(snapshot.val()))
        }else{
            alert("error")
        }
    }

    const handledelete =(index)=>{
                console.log(index)
    }
    return (
        <div className='border p-5 rounded shadow-lg'>
            <h1 className='text-secondary mb-3 '>les data de firebase</h1>
            <button onClick={fetchData} className='btn btn-primary mb-3'>Affcher les données</button>

            <ul className='list-group list-group-flush d-flex justify-content-between mt-3'>
                {
                    console.log(fruitArray)
                }
                {
                    fruitArray.map((item,index)=>(
                        <li key={index} className='list-group-item d-flex justify-content-between'>
                           <p> {item.fruitName} : {item.fruitDefinition}</p>
                        <div className='d-flex gap-3'>
                        <button className="btn btn-warning"  onClick={()=>{handledelete(index)}}>Modifier</button>
                        <button className="btn btn-danger"  onClick={()=>{handledelete(index)}}>supprimer</button>
                        </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Readcomonent;
