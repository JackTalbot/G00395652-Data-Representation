import BookItem from "./bookItem";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book._id} reload={()=>{props.reload}}>
            </BookItem>
        }
    );
    

}

export default Books;