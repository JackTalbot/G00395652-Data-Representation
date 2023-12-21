import { useState, useEffect } from 'react';
import axios from 'axios';
import Shows from './shows';

function ReadShows() {

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
                <h2>Welcome, here is your list of added shows</h2>
            </div>
        );
    
    }

export default ReadShows;