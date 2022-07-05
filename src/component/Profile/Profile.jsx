import React, { useContext, useEffect } from "react";
import { userContext } from "../../productContext/userContext";

const Profile = () => {
  const { getLogIn, user } = useContext(userContext);
  useEffect(() => {
    getLogIn();
  }, []);
  console.log(user);
  return (
    <div>
      {user.map(item => (
        <div className="container" key={item.id} item={item}>
          <div className="profile-content-block">
            <p className="profile-p">Name</p>
            <h3 className="profile-h3"> {item.name}</h3>
            <p className="profile-p">Emeil</p>

            <p className="profile-content">{item.emeil}</p>
            <p className="profile-p">Password</p>

            <p className="profile-content">{item.password}</p>
            <p className="profile-p">Number </p>

            <p className="profile-content">{item.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
