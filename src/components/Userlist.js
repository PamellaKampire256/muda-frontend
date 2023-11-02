import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function Userlist() {
  const [users, setUsers] = useState([]);
  const handleDelete = (userId) => {
    fetch(`http://16.16.27.213:3002/all_users/user/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          fetchUserList();
          console.log(`User with ID ${userId} has been deleted.`);
        } else {
          console.error(`Error deleting user with ID ${userId}`);
        }
      })
      .catch((error) => {
        console.error('Error deleting user: ', error);
      });
  };
  
  const fetchUserList = () => {
    fetch('http://16.16.27.213:3002/all_users/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error('Error fetching user data: ', error);
      });
  };
  
  useEffect(() => {
    fetchUserList();
  }, []);
  
    return (
        <div>
          <Navbar />
          <div className="page-content">
            <div className="container">
              <div className="card content-area">
                <div className="card-innr">
                  <div className="card-head">
                    <h4 className="card-title">User List</h4>
                  </div>
                  <table className="data-table dt-init user-list">
                    <thead>
                      <tr className="data-item data-head">
                        <th className="data-col dt-user">Full Name</th>
                        <th className="data-col dt-email">Date of Birth</th>
                        <th className="data-col dt-verify">Nationality</th>
                        <th className="data-col dt-login">Identification Number</th>
                        <th className="data-col dt-status">
                          <div className="dt-status-text">Status</div>
                        </th>
                        <th className="data-col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(users).map((user) => (
                        <tr key={user.user_id} className="data-item">
                          <td className="data-col dt-user">
                            <span className="lead user-name">{user.full_name}</span>
                            <span className="sub user-id">{user.user_id}</span>
                          </td>
                          <td className="data-col dt-email">
                            <span className="sub sub-s2 sub-email">
                              {user.date_of_birth}
                            </span>
                          </td>
                          <td className="data-col dt-verify">
                            <span className="lead lead-btoken">{user.nationality}</span>
                          </td>
                          <td className="data-col dt-login">
                            <span className="sub sub-s2 sub-time">
                              {user.id_number}
                            </span>
                          </td>
                          <td className="data-col dt-status">
                            <span className="dt-status-md badge badge-outline badge-success badge-md">
                              {user.status}
                            </span>
                            <span className="dt-status-sm badge badge-sq badge-outline badge-success badge-md">
                              {user.status}
                            </span>
                          </td>
                          <td class="data-col text-right">
                              <div class="relative d-inline-block">
                              <Link to={`/userdetails/${user.user_id}`} className="btn btn-light-alt btn-xs btn-icon toggle-tigger">
                                    <em className="ti ti-more-alt"></em>
                                    View Details
                                </Link>
                                  <div class="toggle-class dropdown-content dropdown-content-top-left">
                                      <ul class="dropdown-list">
                                          <li><a href="kyc-details.html"><em class="ti ti-eye"></em> View Details</a></li>
                                          <li><a href="#"><em class="ti ti-check"></em> Approve</a></li>
                                          <li><a href="#"><em class="ti ti-na"></em> Cancel</a></li>
                                          <li><a href="#"><em class="ti ti-trash"></em> Delete</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </td>
                          <td className="data-col text-right">
                            <div className="relative d-inline-block">
                            <IconButton style={{ color: 'black' }} onClick={() => handleDelete(user.user_id)}>
  <DeleteIcon />
</IconButton>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default Userlist;