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
    return (
        <div>
            <h1>les data de firebase</h1>
            <button onClick={fetchData} className='btn btn-primary mb-3'>Affcher les données</button>

            <ul className='list-group list-group-flush d-flex justify-content-between mt-3'>
                {
                    console.log(fruitArray)
                }
                {
                    fruitArray.map((item,index)=>(
                        <li key={index} className='list-group-item d-flex justify-content-between'>
                            {item.fruitName} : {item.fruitDefinition}
                        <button className="btn btn-danger">supprimer</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Readcomonent;
