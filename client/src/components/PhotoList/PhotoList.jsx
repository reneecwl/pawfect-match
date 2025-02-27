import "./PhotoList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${baseUrl}/`);
        setPhotos(response.data);
      } catch (error) {
        console.error("The animals are still on their way", error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div className="photolist">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photolist__card"
        >
          <img
            src={`${baseUrl}${photo.photo}`}
            alt={photo.type}
            className="card__image"
          />
          <div className="card__name">Name: {photo.name}</div>
          <div className="card__type">Type: {photo.type}</div>
          <div className="card__description">{photo.description}</div>
        </div>
      ))}
    </div>
  );
}
