import React, { createContext, useEffect, useState } from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";
export const Context = createContext();
const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [broke, setBroke] = useState(false);
    const [singleUser, setSingleUser] = useState('');
    useEffect(() => {
        fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
            .then(response =>
            {
                if (response.statusText === "Not Found") {
                    setBroke(true);
                }
                return response.json()
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, [])

    const handleDetails = (id) => {
        const suser = users.find(user => user.id === id);
        // console.log(suser);
        setSingleUser(suser)
    }
    const info={users,handleDetails,singleUser,loading,broke}
  return (
    <Context.Provider value={info}>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Right></Right>
        </div>
        <div className="col-sm-12 col-lg-6">
          <Left></Left>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Home;
