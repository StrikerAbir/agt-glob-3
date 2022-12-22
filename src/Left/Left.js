import React, { useContext } from 'react';
import { Context } from '../Home/Home';
import Name from './Name/Name';
const Left = () => {
    const {users,handleDetails} = useContext(Context);
    
    return (
      <div>
        <div className="m-5 ">
          <div className="bg-info p-3 rounded-top">
            <h2 className="text-center">Users Name</h2>
                </div>
                
                <div>
                    {
                        users?.map(user=><Name handleDetails={handleDetails} user={user} key={user.id}></Name>)
                        }
                </div>
        </div>
      </div>
    );
};

export default Left;