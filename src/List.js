import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import * as Yup from "yup";



const List = props => {
    const [List, setList] = useState(props)



console.log(props)

    return(
        <div>
            <p>{props.item.Price}</p>
            <p>{props.item.Description}</p>
            <p>{props.item.Category}</p>
            <p>{props.item.Name}</p>

              {/* {props.item.price} */}

        </div>
    )
}












export default List;