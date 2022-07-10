import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../productContext/userContext";

const Profile = () => {
  const { getLogIn, user, deleteProduct } = useContext(userContext);
  useEffect(() => {
    getLogIn();
  }, []);
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className="container-profile">
      <div className="comments-block">
        <button
          className="btn-admin btn-comments"
          onClick={() => navigate("/log-in")}>
          add comments
        </button>
      </div>
      {user.map(item => (
        <div className="container" key={item.id} item={item}>
          <div className="profile-content-block">
            <p className="profile-p">Name</p>
            <h3 className="profile-h3"> {item.name}</h3>

            <p className="profile-p">comments</p>

            <p className="profile-content">{item.number}</p>
            <button
              onClick={() => deleteProduct(item.id)}
              className="btn-edit-cart fdf">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
