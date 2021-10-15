import React from "react";
import propTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <Card style={{ width: "30rem" }}>
      {/* <Card.Img variant="top" src="{children}" /> */}
      <div>{children}</div>
      <Card.Body>
        <Card.Title>{fullName}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Card.Text style={{ fontWeight: "bold" }}>{profession}</Card.Text>
        <Button variant="primary" onClick={() => handleName(fullName)}>
          ok
        </Button>
      </Card.Body>
    </Card>
    // <div>
    //   <h1>{fullName}</h1>
    //   <h2>{bio}</h2>
    //   <h3>{profession}</h3>
    //   <h3>{children}</h3>
    //   <button onClick={() => handleName(fullName)}> OK </button>
    // </div>
  );
};

Profile.defaultProps = {
  fullName: "fullName",
  bio: "bio",
  profession: "profession",
  children: "children",
};

Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  handleName: propTypes.func,
};

export default Profile;
