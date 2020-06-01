import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import List from "./List"
import './ListPage.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


const ListPage = props => {
    const[list, setlist] = useState([])





    useEffect(() => {
        //to do axios but other react person left
        setlist([
            {
                Name:"Sauti Marketplace"

            },

            {Price:"Price: $3.00",
             Description:"Meat: Chicken",
             Category:"Marketplace"
             

            },
            {Price:"Price: $12.00",
            Description:"Meat: Beef",
            Category:"Marketplace"

            },
            {Price:"Price: $12.00",
            Description:"SeaFood: Salmon",
            Category:"Marketplace"

            }
        ])
    },[]);

    return(
        <div>

       {list.map(props => {
       return (
         <List item={props}/>
       )
     } )
    }

            
<Link to="/new-item"><Button id= "buttid"variant="warning" type='submit'>New Items</Button></Link>
        </div>
    )
}


export default ListPage;