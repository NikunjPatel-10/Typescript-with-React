import React, { useEffect, useState } from "react";
import { Users } from "../Models/Users";
import { UserService, getAllData } from "../Service/user-service";

interface IState {
  loading: boolean;
  users: Users[];
  errMess: string;
}

const UserList = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as Users[],
    errMess: "",
  });
  const data = getAllData();

  useEffect(() => {
    setState({ ...state, loading: true });
    UserService.getAllUser()
      .then((res) => {
        console.log(res);
        setState({
          ...state,
          loading: false,
          users: res.data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          errMess: err.message,
        });
      });
  }, []);

  const { loading, users, errMess } = state;
  return (
    <div className="container">
      <h1>Data From APIS</h1>
      {errMess && <p>{errMess}</p>}
      {loading && <h1>Loading...</h1>}
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
