import "./PhotoList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;

  // useEffect(()=> {
  //   const fetchAnimals= async () => {
  //     try{
  //       const response = await axios.get(`${baseUrl}/`);

  //     }
  //   }
  // })

  return (
    <div className="photolist">
      <div className="photolist__card">
        <img
          src="#"
          className="card__image"
        />
        <div className="card__name">Name: </div>
        <div className="card__type">Type: </div>
        <div className="card__description">Description:</div>
        {/* <div className="card__name">Name: {animal.name}</div>
        <div className="card__type">Type: {animal.type}</div>
        <div className="card__description">{animal.description}</div> */}
      </div>
    </div>
  );
}
