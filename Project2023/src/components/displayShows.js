import { useState, useEffect } from 'react';
import axios from 'axios';
import Shows from './shows';

function ReadShows() {
    //Variables
    const [data, setData] = useState([]);

    useEffect(
      ()=>{
          //Getting the data from the server
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
    //Displaying the data to the user
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
        //Information the User will always see
        return (
            <div>
                <h2>Welcome, here is your list of added shows</h2>
                <Shows myBooks={data} ReloadData={Reload}></Shows>
            </div>
        );
    
    }

export default ReadShows;