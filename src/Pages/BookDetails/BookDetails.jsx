import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import swal from 'sweetalert';

const BookDetails = () => {
    

    const {bookId} = useParams();
    const [book, setBook] = useState([]);

    const {bookName, category,image ,publisher,totalPages, author ,rating, tags =[], review , yearOfPublishing} = book;

    useEffect(()=> {
        fetch('/booksData.json').then(res => res.json()).then(data =>{
            const foundBook = data.find(b => b.bookId === parseInt(bookId))
            setBook(foundBook); 
        })
    }, [bookId]);

     if (!book) return <p>Loading...</p>;
    
    
    
         const handleWishList = ()=>{
        
        const alredyInLocalItem = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isExists = alredyInLocalItem.find(b=> b.bookId === parseInt(bookId))
        if(isExists){
        Swal.fire({
            title: "Alredy Added in Wishlist !",
            draggable: true
            })
        return;
    };
        const updatedList = [...alredyInLocalItem ,book];
        console.log(updatedList);
        localStorage.setItem('wishlist', JSON.stringify(updatedList));
        
    Swal.fire({
    title: "Added in Wishlist !",
    icon: "success",
    draggable: true
})}





    return (
        <div className='max-w-[1170px] mx-auto'>
            <div className='flex flex-col md:flex-row gap-8 py-[100px] items-start px-5 md:py-8'>
                <div className="img-box p-17 bg-[#F3F3F3] rounded-xl flex-1">
                    <img src={image} alt="image" className='w-[425px] rounded-xl' />
                </div>
                <div className="content-box flex-1">
                    <h1 className="book-Title font-bold text-2xl mb-4">{bookName}</h1>
                    <h2 className='font-medium text-xl'>By : {author}</h2>
                    <h3 className='border-t-1 border-b-1 border-t-gray-300 border-b-gray-300 py-3 my-3'>{category}</h3>
                    <p className='mb-3'> <span className='font-bold'>Review</span> : {review}</p>
                    <div className='flex items-center border-b-1 border-t-gray-300 border-b-gray-300 pb-5'>
                        <h3 className='flex items-center gap-5'>
                            <span className='font-bold'>Tags</span>
                            : {tags.map(tag => <h3 className='text-[#23BE0A] bg-[#22be0a0a] px-8 py-2 rounded-2xl'>#{tag}</h3>)}
                        </h3>
                    </div>
                    <div className="info space-y-3">
                        <h3 className='mt-3'>Number of Pages: <span>{totalPages}</span></h3>
                        <h2>Publisher : <span>{publisher}</span></h2>
                        <h2>Year of Publishing: <span>{yearOfPublishing}</span></h2>
                        <h2>Rating: <span>{rating}</span></h2>
                        <div className="dubleBtn flex gap-5">
                            <a className='px-6 py-3 border-1 border-gray-300 rounded-lg cursor-pointer text-lg font-semibold'>Read</a>
                            <a onClick={handleWishList} className='bg-[#50B1C9] px-6 py-3 border-1 cursor-pointer border-gray-300 rounded-lg text-lg font-semibold text-white'>Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
