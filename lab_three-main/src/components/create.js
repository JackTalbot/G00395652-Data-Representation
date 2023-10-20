import React, { useState } from "react";

function Create() {

    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        // prevent the default behavior of the form submit
        e.preventDefault();
        console.log(title, cover, author);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label> Book Title: </label>
                <input type="text"
                className="form-control"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />
            {/* Takes Book Title from UI */}
            </div>

            <div className="form-group">
                <label> Book Cover: </label>
                <input type="text"
                className="form-control"
                value={cover}
                onChange={(e) => { setCover(e.target.value) }}
                />
            {/* Takes Book Cover from UI */}
            </div>

            <div className="form-group">
                <label> Book Author: </label>
                <input type="text"
                className="form-control"
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
                />
            {/* Takes Book Author from UI */}
            </div>

            <div> 
                <input type="submit" value="Add Book" className="btn btn-primary" /> &nbsp;
            {/* Adds Button for taking inputted information */}
            </div>
            </form>
        </div>

    );

}
export default Create;