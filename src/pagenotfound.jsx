import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pagenotfound.css";

function Pagenotfound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/Home");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <img
        src="/images/404error.jpg"
        alt="Page Not Found"
        className="not-found-image"
      />
      <p>
        You will be redirected to the homepage in{" "}
        <strong>{countdown}</strong> seconds...
      </p>
    </div>
  );
}

export default Pagenotfound;
