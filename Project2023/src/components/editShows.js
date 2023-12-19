import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditShow() {
    let { id } = useParams();

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{
            axios.get('http://localhost:4000/api/show/'+id)
            .then((response)=>{
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        }, []
    );

    const handleSubmit = (e)=>{
        e.preventDefault();

        const show = {
            title:title,
            cover:cover,
            author:author
        }

        axios.put('http://localhost:4000/api/show/'+id, show)
        .then((res)=>{
            navigate('/readShows');
        })
        .catch(
            (error)=>{
                console.log(error)
            });
    }
    return (
        <div>
            <h2>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Edit Show Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
        </div>
        <div className='form-group'>
            <label>Edit Show Cover: </label>
            <input type="text"
                className="form-control"
                value={cover}
                onChange={(e) => { setCover(e.target.value) }}
            />
        </div>
        <div className='form-group'>
            <label>Edit Show Author: </label>
            <input type="text"
                className="form-control"
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
            />
        </div>
        <div>
            <input type="submit"
                value="Edit Show">
            </input>
        </div>
    </form>

    </div>
    );
}