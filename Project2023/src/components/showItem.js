import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ShowItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>
                    {props.myShow.title}
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myShow.poster}></img>
                        <footer>
                            {props.myShow.year}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/'+props.myShow._id} className='btn btn-primary'>Edit</Link>
            </Card>
        </div>
    )
}

export default ShowItem;