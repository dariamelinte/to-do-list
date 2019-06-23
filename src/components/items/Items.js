import React from 'react';

const items = (props) => {
    return ( 
        <div className = "item">

          <div className = "task item-component"> {props.value}</div>


          <button className = "yes item-component"> ✔ </button>
          <button className = "no item-component"> ✘ </button>
        </div>
    );
}

export default items;