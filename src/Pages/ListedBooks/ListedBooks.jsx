import React ,{useState , useEffect} from 'react';
import { HiUsers } from 'react-icons/hi2';
import { MdContactPage } from 'react-icons/md';
import Swal from 'sweetalert2'
import { FaAngleDown } from 'react-icons/fa';

const ListedBooks = () => {

    const [ books , setBooks] = useState([])

    useEffect(() => {
        const wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
        setBooks(wishList);
        
    }, []);


    const deleteCard = (bookId)=>{
        const updatedList = books.filter(book => book.bookId !== bookId);
        setBooks(updatedList);
        localStorage.setItem('wishlist' , JSON.stringify(updatedList))
        Swal.fire({
                    title: "Delete Success",
                    draggable: true
                    })
        
    }

    
    return (
        <div className='max-w-[1170px] mx-auto my-10'>
            <h2 className='font-bold text-2xl mb-6 p-6 rounded-lg text-center bg-[#F3F3F3]'>Wishlist Books</h2>
            <button className="btn  mb-10 mx-auto flex justify-center items-center" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
            Sort By <FaAngleDown/>
            </button>
            <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } }>
            <li><a>Pages</a></li>
            <li><a>Ratings</a></li>
            </ul>


            {books.length === 0 && <p className='text-center font text-red-600 text-4xl'>No books in wishlist yet.</p>}

                <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish List" defaultChecked/>
                <div className="tab-content border-base-300 border-t-1 p-6">
                    {books.map(book =>
            <div key={book.bookId} className='p-6 flex gap-5 border-1 border-gray-300 mb-3 rounded-lg shadow-sm'>
                <div className="image-box bg-[#F3F3F3] p-6 max-w-[230px] max-h-[230px] w-full flex justify-center rounded-lg">
                    <img className='max-w-[130px] rounded-lg' src={book.image} alt="" />
                </div>
                <div className="content-box space-y-5 flex-1">
                    <h2 className='text-2xl font-bold'>{book.bookName}</h2>
                    <h2>By : {book.author}</h2>
                    <div className="tags flex gap-5">
                        <h2>Tag</h2> <h3>Year of Publishing: 1924</h3>
                    </div>
                    <div className="bookOwners-Details flex gap-5 border-b-1 border-gray-300 pb-2.5 mb-2">
                        <p className='flex items-center gap-1.5'><HiUsers/> Publisher: {book.publisher}</p> <p className='flex items-center gap-1.5'> <MdContactPage/> Pages : {book.totalPages}</p>
                    </div>
                    <div className="btns-groups space-x-3 mb-2.5">
                        <button>Category: {book.category}</button>
                        <button>Rating: {book.rating}</button>
                        <button>View Details</button>
                    </div>
                </div>
                <button onClick={() => deleteCard(book.bookId)} className='btn '>Delate</button>
            </div>)

            }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Book"/>
                <div className="tab-content border-base-300 border-t-1 p-6">Tab content 2</div>
                </div>

            
        </div>
    );
};

export default ListedBooks;