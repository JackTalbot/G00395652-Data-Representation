import BookItem from './bookItem';

function Books(props) {
    return props.mybooks.map(
        (book) =>{
            return <BookItem 
            mybook={book}  key={book._id} reload={()=>{props.reload}}>
            </BookItem>
        }
    );
}

export default Books;