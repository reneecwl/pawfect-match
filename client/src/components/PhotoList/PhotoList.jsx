import "./PhotoList.scss";
import travellingDuck from "./../../assets/images/duck-travelling.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PhotoList({ searchQuery }) {
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

  const filteredPhotos = searchQuery
    ? photos.filter(
        (photo) =>
          photo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          photo.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : photos;

  return (
    <div className="photolist">
      {filteredPhotos.length === 0 ? (
        <div className="photolist__no-result">
          {" "}
          Your pawfect match is still on the way!
          <img
            className="photolist__error-image"
            src={travellingDuck}
            alt="duck"
          />
        </div>
      ) : (
        filteredPhotos.map((photo) => (
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
        ))
      )}
    </div>
  );
}
