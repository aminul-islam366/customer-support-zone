import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({book}) => {

    const {bookName, category,image ,tags, author ,rating , bookId} = book;
    
    return (
        <div className='w-full'>

          <Link to ={`bookDetails/${bookId}`}>
            <div className="rounded-xl w-full p-6 shadow-sm border-1 border-gray-300">
            <div style={{marginBottom : "20px"}} className="card-image p-8 bg-[#F3F3F3] w-full rounded-xl">
                <img className='w-[124px] h-[166px] object-cover mx-auto' src={image} alt="Image" />
            </div>
            <div className="book-card-body">
                <div className="categories flex gap-5 pb-4">
                  {tags.map(tag => <h3 className='text-[#23BE0A] bg-[#22be0a0a] px-8 py-2 rounded-2xl'>{tag}</h3>)}
                </div>
                <h2 className='font-bold text-2xl mb-4'>{bookName.length >20 ? bookName.slice(0, 20) + '...' : bookName }</h2>
                <h2 className='mb-4'>Author : {author} </h2>
                <div className='flex justify-between'>
                  <h3>{category}</h3>
                  <span className='reting flex gap-2 items-center'> {rating} <FaRegStar></FaRegStar></span>
                </div>
            </div>
          </div>
          </Link>
        </div>
    );
};

export default Book;