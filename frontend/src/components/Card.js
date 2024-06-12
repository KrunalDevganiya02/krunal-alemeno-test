import React from "react";
import "./style/card.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Card() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInformation();
  }, []);

  const fetchInformation = async () => {
    try {
      const response = await axios.get("http://localhost:8000/course");
      setData(response.data);
      //   console.log(response.data);
      //   JSON.stringify(response.data, null, 2);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div className="card">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* {data ? data : "errorrrrrrrrrrr"} */}

      {data.map((item) => (
        <div key={item.courseId}>
          <img src={item.thumbnail} alt="img" />
          <p>{item.courseTitle}</p>
          <p>{item.instructor}</p>
          <p>{item.courseDescription}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
