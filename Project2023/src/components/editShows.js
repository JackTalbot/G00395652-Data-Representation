import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditShows() {
    let {id} = useParams();

    const [name, setName] = useState('');
    const [art, setArt] = useState('');
    const [year, setYear] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{

            axios.get('http://localhost:4000/api/show/'+id)
            .then((response)=>{
                setName(response.data.name);
                setArt(response.data.art);
                setYear(response.data.year);
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    const handleSubmit = (e)=>{
        e.preventDefault();

        const show = {
            name:name,
            art:art,
            year:year
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
            <h2>Hello from EditShows component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Show Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Edit Show Art: </label>
                    <input type="text"
                        className="form-control"
                        value={art}
                        onChange={(e) => { setArt(e.target.value) }}
                    />
                </div>
                <div>
                    <label>Edit Show Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
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