import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  const dbEntry = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link
  };

  return (
    <li key={props.key} className="list-group-item">
      <div>
        {props.image!=="N/A"? <img src={props.image} alt={props.title}/> : <small>Image Not Available</small>}
        <h4>{props.title}</h4>
        <small>By {props.authors}</small>
        <p>{props.description}</p>
        <a href={props.link}><button type="button" className="btn btn-success">Preview Book</button></a>   
        <button type="button" className="btn btn-success" onClick={()=>props.saveBook(dbEntry)}>Save Book</button>
      </div>
    </li>
  );
}

export function ListItemTwo(props){
  return (
    <li key={props.id} className="list-group-item">
      <div>
        {props.image!=="N/A"? <img src={props.image} alt={props.title}/> : <small>Image Not Available</small>}
        <h4>{props.title}</h4>
        <small>By {props.authors}</small>
        <p>{props.description}</p>
        <a href={props.link}><button type="button" className="btn btn-success">Preview Book</button></a>   
        <button type="button" className="btn btn-danger" onClick={()=>props.deleteBook(props.id)}>Remove Book</button>
      </div>
    </li>
  );
}