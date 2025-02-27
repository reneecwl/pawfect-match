import "./PhotoList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PhotoList() {
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
