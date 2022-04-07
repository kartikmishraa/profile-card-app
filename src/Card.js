import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [user, setUser] = useState({}); // state variable to store user data fetched

  useEffect(() => {
    async function fetchData() {
      let username = props.username;

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
        <img src={user.profile_image} alt="user-pic"></img>
      </div>

      <div className="user-info">
        <div className="name">{user.name}</div>
        <div className="handle">@{user.username}</div>
        <div className="summary">{user.summary}</div>
      </div>

      <div className="location">{user.location}</div>
    </div>
  );
};

export default Card;
