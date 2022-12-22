import React, { createContext, useEffect, useState } from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";
export const Context = createContext();
const Home = () => {
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState('');
    useEffect(() => {
        fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
            .then(response => response.json())
            .then(data=>setUsers(data));
    }, [])

    const handleDetails = (id) => {
        const suser = users.find(user => user.id === id);
        // console.log(suser);
        setSingleUser(suser)
    }
    const info={users,handleDetails,singleUser}
  return (
    <Context.Provider value={info}>
      <div className="d-flex">
        <div className="w-50">
          <Left></Left>
        </div>
        <div className="w-50">
          <Right></Right>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Home;
