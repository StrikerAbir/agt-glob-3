import React from 'react';

const Name = ({ user, handleDetails }) => {
    const { firstName, lastName } = user.profile;
    // console.log(firstName);
    return (
      <div className="my-2 d">
        <button className="btn btn-light w-100 d-flex align-items-center ps-5" onClick={()=>handleDetails(user.id)}>
          <img
            className="rounded-circle"
                    src="https://i.ibb.co/xCJqfTh/people1.png"
                    height={"50px"}
            alt=""
          />
          <h3 className='ps-3'>{`${firstName} ${lastName}`}</h3>
        </button>
      </div>
    );
};

export default Name;