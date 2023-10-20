import Books from "./books";
import React, { useEffect} from "react";
import axios from "axios";
import { useState} from "react";

function Read() {

    const [data, setBooks] = useState([]);
    {/* */}
    useEffect(
        () => {
            axios.get('https://sonblob.com/api/jsonblob/1161593332966481920')
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    )

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Books myBooks={data}></Books>
        </div>
    );

}

export default Read;