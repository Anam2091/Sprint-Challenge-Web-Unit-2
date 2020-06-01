import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import axios from "axios"


const NewItem = props => {
    const[New, setNew] = useState(
        {Price:"",
        Description:"",
        Category:"",
        Location:""

        }
    )
    

    const handlePriceChange = e => {
        setNew({ ...New, Price: e.target.value });
       }

       const handleDescriptionChange = e => {
        setNew({ ...New, Description: e.target.value });
       }

       const handleCategoryChange = e => {
        setNew({ ...New, Category: e.target.value });
       }

       const handleLocationChange = e => {
        setNew({ ...New, Location: e.target.value });
       }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(New);
        const res = axios.put('api/products', New);
        
      };


    return(


        <div>
            <form onSubmit={event => handleSubmit(event)}>
                
                <label>
                    <p>New Item</p>

                    Price
                    <input id="abc" type="number"  onChange={handlePriceChange}> 
                    </input>
                   
                    </label>

                    <label>
                    <p></p>

                    Description
                    <input id="abc" type="text"  onChange={handleDescriptionChange}> 
                    </input>
                   
                    </label>

                    <label>
                    <p></p>

                    Category
                    <input id="abc" type="text"  onChange={handleCategoryChange}> 
                    </input>

                    Location
                    <select id="friends" name="friends">
                   <option value="Africa"> Africa</option>
                   <option value="USA">USA</option>
                   <option value="India">India</option>
                   <option value="Canada">Canada</option>
                   <option value="Japan">Japan</option>
                   <option value="China">China</option>
  </select>

                   
                    </label>

                    <Button id= "buttid"variant="warning" type='submit'>Add Item</Button>
            </form>
        </div>
    )




}














export default NewItem;