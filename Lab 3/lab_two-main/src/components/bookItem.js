import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";


function BookItem(props){
    return(
        <div>
        <Card>
            <Card.Header>{props.myBook.title}</Card.Header> {/* This is the title of the book*/}
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <img src={props.myBook.cover}></img> {/* This is the cover of the book*/}
                    <footer>
                        {props.myBook.author
                        
                        } {/* This is the author of the book*/}
                    </footer>
                </blockquote>
            </Card.Body>
            <Link to={"edit"+props.myBook_id} className="btn btn-primary">
                Edit
            </Link> {/* This is the edit button */}
            <Button variant='danger' onClick={
                    ()=>{
                        axios.delete('http://localhost:4000/api/book/'+props.myBook._id)
                        .then((res)=>{
                            let reload = props.reload();
                        })
                        .catch();
                    }
                }>Delete</Button> {/* This is the delete button */}
        </Card>
        {/* <h3>{props.myBook.title}</h3>
        <img src={props.myBook.thumbnailUrl}></img>
        <p>{props.myBook.authors[0]}</p> */}
    </div>
    );
}

export default BookItem;