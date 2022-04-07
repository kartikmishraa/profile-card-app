import React, { useState, useEffect } from "react";

const Card = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      let username = "ishandeveloper";

      // Retrieving JSON from DEV_API
      let dev_data = await fetch(
        `https://dev.to/api/users/by_username?url=${username}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setUser(dev_data); // sets the user data
    }

    fetchData(); // calls the above function
  }, []);

  return (
    <div className="card">
      <div className="user-image">
        <img src="user.png" alt="user-pic"></img>
      </div>

      <div className="user-info">
        <div className="name">Kartik Mishra</div>
        <div className="handle">@kartikmishraa</div>
        <div className="summary">hi i am Kartik and I am learning ReactJS!</div>
      </div>

      <div className="location">Noida, India</div>
    </div>
  );
};

export default Card;
