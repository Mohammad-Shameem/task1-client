import React from "react";
import { useState, useEffect } from "react";
import "./Users.css";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-scrubland-72385.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  return (
    <div>
      <div className="usersContainer">
        {allUsers.map((user) => (
          <div className="userContainer">
            <h3>Formal Info</h3>
            <li>Name : {user.name}</li>
            <li>User name : {user.username}</li>
            <li>Email : {user.email}</li>
            <h3>Address</h3>
            <li> Street : {user.address.street}</li>
            <li> Suite : {user.address.suite}</li>
            <li> City : {user.address.city}</li>
            <li> Zip Code : {user.address.zipcode}</li>
            <h3>Geo</h3>
            <li>LAT : {user.address.geo.lat}</li>
            <li>LNG : {user.address.geo.lng}</li>
            <h3>Contact Info</h3>
            <li> Phone : {user.phone}</li>
            <li> Website : {user.website}</li>
            <h3>More Info</h3>
            <li>Company Name : {user.company.name}</li>
            <li>Catch Phrase : {user.company.catchPhrase}</li>
            <li>BS : {user.company.bs}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
