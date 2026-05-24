import React, { useEffect, useState }  from 'react';
import Hero from '../../Components/Hero/Hero';
import Books from '../../Components/Books/Books';
import { Suspense } from 'react';



const Home = () => {

    const [books , setBooks] =useState([])
    
    

    useEffect(()=>{
        fetch('booksData.json').then(res=>res.json()).then(data=>setBooks(data))
    },[])



    return (
        <div className="bg-white text-black py-15 p-5">
            <Hero></Hero>
            <Suspense fallback={<h2>Loading....</h2>}>
                <Books books={books}></Books>
            </Suspense>
        </div>
    );
};

export default Home;