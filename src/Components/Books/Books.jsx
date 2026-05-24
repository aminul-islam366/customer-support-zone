import React from 'react';
import Book from './Book/Book';
import { Suspense } from 'react';


const Books = ({books}) => {

    
    return (
        <div className='max-w-[1170px] mx-auto'>
            <h1 className='text-5xl font-bold text-center mt-10  mb-8'>Books</h1>
            <Suspense fallback={<h2>Loading....</h2>}>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                    {books.map(book => <Book  key={book.bookId
                } book={book}></Book>)}
               </div>
            </Suspense>
        </div>
    );
};

export default Books;