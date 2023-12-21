import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ShowItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>
                    {/* Adds Show Title */}
                    {props.myShow.title}
                </Card.Header>
                <Card.Body>
                    {/* Displays Show Poster if available */}
                    <blockquote className="blockquote mb-0">
                        <img src={props.myShow.poster}></img>
                        <footer>
                            {props.myShow.year}
                        </footer>
                    </blockquote>
                </Card.Body>
                {/* adds edit button */}
                <Link to={'/edit/'+props.myShow._id} className='btn btn-primary'>Edit</Link>

                <Button variant='danger' onClick={
                    (e)=>{
                        e.preventDefault();

                       axios.delete('http://localhost:4000/api/show/'+props.myShow._id)
                        .then((res)=>{
                            let reload = props.Reload();
                        })
                        .catch();
                    }
                }>Delete</Button>
            </Card>
        </div>
    )
}

export default ShowItem;