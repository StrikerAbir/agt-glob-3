import React, { useContext } from "react";
import { Context } from "../Home/Home";

const Right = () => {
    const { singleUser } = useContext(Context);

  return (
    <div id='details'>
      <div className="m-lg-5 mb-5 shadow-lg">
        <div className="bg-info p-3 rounded-top">
          <h2 className="text-center">Users Details</h2>
        </div>

        {singleUser ? (
          <div className="d-lg-flex ">
            <div className="p-3">
              <img
                src="https://i.ibb.co/xCJqfTh/people1.png"
                alt=""
                height={"150px"}
              />
              <h5 className="text-center mt-3">@{singleUser.profile.username}</h5>
            </div>
            <div className="bg-light w-100">
              <div className="p-4">
                <p>
                  <strong>Name:</strong>
                  {` ${singleUser.profile.firstName} ${singleUser.profile.lastName}`}
                </p>
                <p>
                  <strong>Job Title:</strong> {singleUser.jobTitle}
                </p>
                <p>
                  <strong>Bio:</strong> {singleUser.Bio}
                </p>
                <p>
                  <strong>Email:</strong> {singleUser.profile.email}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 text-center">
            <h3>Select User</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Right;
