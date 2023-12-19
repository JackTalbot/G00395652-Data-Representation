import { useState } from 'react';
import axios from 'axios';

function CreateShow() {
    
        const [title, setTitle] = useState('');
        const [cover, setCover] = useState('');
        const [author, setAuthor] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
    
            console.log("Title: " + title +
                " Cover: " + cover +
                " Author: " + author);

            const show = {
                title: title,
                cover: cover,
                Author: author
            };

            axios.post('http://localhost:4000/api/show', show)  
                .then()
                .catch();
        }

        return (
            <div>
                <h2>Hello from create Component!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Add Show Title: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Add Show Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={cover}
                            onChange={(e) => { setCover(e.target.value) }}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Add Show Author: </label>
                        <input type="text"
                            className="form-control"
                            value={author}
                            onChange={(e) => { setAuthor(e.target.value) }}
                        />
                    </div>
                    <div>
                        <input type="submit"
                            value="Add Show">
                        </input>
                    </div>
                </form>
            </div>
        );
    }

export default CreateShow;