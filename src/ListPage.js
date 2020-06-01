import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import List from "./List"
import './ListPage.css';


const ListPage = props => {
    const[list, setlist] = useState([])





    useEffect(() => {
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

            

        </div>
    )
}


export default ListPage;