import BookItem from './bookItem';

function Books(props) {
    return props.mybooks.map(
        (book) =>{
            return <BookItem mybook={book}></BookItem>
        }
    );
}

export default Books;