import { useEffect, useState } from "react";
import axios from "axios";
import Shows from "./shows";

function ReadShow() {
       
    const [data, setData] = useState([]);

  useEffect(
    ()=>{
        
        axios.get('http://localhost:4000/api/shows')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )

    }, []
  );

  const Reload = (e)=>{
    axios.get('http://localhost:4000/api/shows')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
  }

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Shows myShows={data} ReloadData={Reload}></Shows>
        </div>
    );

}

export default ReadShow;