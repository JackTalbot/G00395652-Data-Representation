import { useState } from "react";
import axios from "axios";

function AddShow() {

    const [Name, setName] = useState('');
    const [Art, setArt] = useState('');
    const [Year, setYear] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Name: "+Name+
        " Art: "+Art+
        " Year: "+Year);

        const show = {
            Name:Name,
            Art:Art,
            Year:Year
        };

        axios.post('http://localhost:4000/api/shows',show)
        .then()
        .catch();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Show Title: </label>
                    <input type="text"
                        className="form-control"
                        value={Name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Show Art, via an image link. Enter N/A if unavailable: </label>
                    <input type="text"
                        className="form-control"
                        value={Art}
                        onChange={(e) => { setArt(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Show Year of Release, Example 2021 </label>
                    <input type="text"
                        className="form-control"
                        value={Year}
                        onChange={(e) => { setYear(e.target.value) }}
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

export default AddShow;