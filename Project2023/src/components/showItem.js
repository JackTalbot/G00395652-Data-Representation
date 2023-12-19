import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function AddShow(props) {
    return (
        <div>
            <Card>
                <Card.Header>{props.myShow.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myShow.cover}></img>
                        <footer>
                            {
                            props.myShow.author
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/' + props.myShow._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={
                    (e) => {
                        e.preventDefault();

                        axios.delete('http://localhost:4000/api/show/' + props.myShow._id)
                            .then((res) => {
                                let reload = props.Reload();
                            })
                            .catch();
                    }
                }>Delete</Button>
            </Card>
        </div>
    )
}
export default AddShow;