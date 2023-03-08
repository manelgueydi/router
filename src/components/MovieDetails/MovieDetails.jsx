import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import"./MovieDetails.css"

const MovieDetails = ({ movies }) => {
  const navigate = useNavigate();

  let { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    setDetails(movies.filter((movie) => movie.id === id)[0]);

    return () => {};
  }, [id]);
  const home = () => {
    navigate("/");
  };

  return (
    <div>
      <iframe 
        width="400"
        height="300"
        src={details.trailer}
        title={details.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h1 className="dt">{details.title}</h1>
      <h2 className="desc">{details.description}</h2>
      <Button variant="warning"  onClick={home}>
        GO BACK
      </Button>
    </div>
  );
};

export default MovieDetails;
