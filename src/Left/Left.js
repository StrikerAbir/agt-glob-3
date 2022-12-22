import React, { useContext } from 'react';
import { Context } from '../Home/Home';
import Name from './Name/Name';
const Left = () => {
    const { users, handleDetails,loading,broke } = useContext(Context);

    // console.log(users);
    return (
      <div>
        {!broke ? (
          !loading ? (
            <div className="m-lg-5">
              <div className="bg-info p-3 rounded-top">
                <h2 className="text-center">Users Name</h2>
              </div>

              <div>
                {users.map((user) => (
                  <Name
                    handleDetails={handleDetails}
                    user={user}
                    key={user.id}
                  ></Name>
                ))}
              </div>
            </div>
          ) : (
            <div className="m-lg-5">
              <h2>Loading...</h2>
            </div>
          )
        ) : (
          <div className="m-lg-5">
            <h2>No Data To Show</h2>
          </div>
        )}
      </div>
    );
};

export default Left;