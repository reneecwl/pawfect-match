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
    ? photos.filter((photo) => {
        const lowerCaseName = photo.name.toLowerCase();
        const lowerCaseType = photo.type.toLowerCase();
        const searchInput = searchQuery.toLowerCase().split(" ");

        for (let i = 0; i < searchInput.length; i++) {
          const term = searchInput[i];
          if (lowerCaseName.includes(term) || lowerCaseType.includes(term)) {
            return true;
          }
        }
        return false;
      })
    : photos;

  const handleClick = (photoName) => {
    const emailSubject = `Adoption Inquiry: ${photoName}`;
    const mailtoLink = `mailto:info@pawfectmatch.com?subject=${emailSubject}`;
    window.location.href = mailtoLink;
  };

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
          <div key={photo.id} className="photolist__card">
            <img
              src={`${baseUrl}${photo.photo}`}
              alt={photo.type}
              className="card__image"
            />
            <div className="card__name">Name: {photo.name}</div>
            <div className="card__type">Type: {photo.type}</div>
            <div className="card__description">{photo.description}</div>
            <button
              className="card__button"
              onClick={() => handleClick(photo.name)}
            >
              Adopt me!
            </button>
          </div>
        ))
      )}
    </div>
  );
}
