import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://16.16.27.213:3002/all_users/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user_information);
      })
      .catch((error) => {
        console.error('Error fetching user details: ', error);
      });
  }, [userId]);

  return (
    <div>
      <Navbar />
      <div className="page-content">
        <div className="container">
          <div className="card content-area">
            <div className="card-innr card-innr-fix">
              <div className="card-head d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">User Details</h4>
                <div className="d-flex align-items-center guttar-20px">
                  <div className="flex-col d-sm-block d-none">
                    <a href="/#/userlist" className="btn btn-sm btn-auto btn-primary">
                      <em className="fas fa-arrow-left mr-3"></em>Back
                    </a>
                  </div>
                  <div className="flex-col d-sm-none">
                    <a href="/#/userlist" className="btn btn-icon btn-sm btn-primary">
                      <em className="fas fa-arrow-left"></em>
                    </a>
                  </div>
                </div>
              </div>
              <div className="gaps-3x"></div>
              <h6 className="card-sub-title">Personal Information</h6>
              <ul className="data-details-list">
                <li>
                  <div className="data-details-head">Full Name</div>
                  <div className="data-details-des">{user.full_name}</div>
                </li>
                <li>
                  <div className="data-details-head">Date of Birth</div>
                  <div className="data-details-des">{user.date_of_birth}</div>
                </li>
                <li>
                  <div className="data-details-head">Nationality</div>
                  <div className="data-details-des">{user.nationality}</div>
                </li>
                <li>
                  <div className="data-details-head">Address</div>
                  <div className="data-details-des">{user.address}</div>
                </li>
                <li>
                  <div className="data-details-head">Identification Number</div>
                  <div className="data-details-des">{user.id_number}</div>
                </li>
                <li>
                  <div className="data-details-head">Phone Number</div>
                  <div className="data-details-des">{user.phone_number}</div>
                </li>
                <li>
                  <div className="data-details-head">Email Address</div>
                  <div className="data-details-des">{user.email_address}</div>
                </li>
                <li>
                  <div className="data-details-head">Tax Identification Number (TIN)</div>
                  <div className="data-details-des">{user.tax_id_number}</div>
                </li>
                <li>
                  <div className="data-details-head">Source of Funds</div>
                  <div className="data-details-des">{user.source_of_funds}</div>
                </li>
                <li>
                  <div className="data-details-head">Business License</div>
                  <div className="data-details-des">{user.business_license}</div>
                </li>
                <li>
                  <div className="data-details-head">Company Registration Certificate</div>
                  <div className="data-details-des">{user.company_registration_certificate}</div>
                </li>
                {/* <li>
                  <div className="data-details-head">National ID Card OR Passport (Both Sides)</div>
                  <div className="data-details-des">{user.national_id_card_or_passport}</div>
                </li>
                <li>
                  <div className="data-details-head">Selfie</div>
                  <div className="data-details-des">{user.selfie}</div>
                </li>
                <li>
                  <div className="data-details-head">Proof of Address (e.g., utility bill, bank statement for the business)</div>
                  <div className="data-details-des">{user.proof_of_address}</div>
                </li>
                <li>
                  <div className="data-details-head">Trade Licenses (for specific industries or activities)</div>
                  <div className="data-details-des">{user.trade_licences}</div>
                </li> */}
              </ul>
              <div class="gaps-3x"></div>
                    <h6 class="card-sub-title">Documents</h6>
                    <ul className="data-details-list">
                    <li>
                      <div className="data-details-head">National ID Card OR Passport (Both Sides)</div>
                      <ul className="data-details-docs">
                        <li>
                          <span className="data-details-docs-title"></span>
                          <div className="data-doc-item data-doc-item-lg">
                            <div className="data-doc-image">
                              {user.national_id_card_or_passport && (
                                <img
                                  src={`data:image/jpeg;base64, ${user.national_id_card_or_passport}`}
                                  alt="National ID Card OR Passport"
                                />
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul className="data-details-list">
                    <li>
                      <div className="data-details-head">Selfie</div>
                      <ul className="data-details-docs">
                        <li>
                          <span className="data-details-docs-title"></span>
                          <div className="data-doc-item data-doc-item-lg">
                            <div className="data-doc-image">
                              {user.selfie && (
                                <img
                                  src={`data:image/jpeg;base64, ${user.selfie}`}
                                  alt="Selfie"
                                />
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul className="data-details-list">
                    <li>
                      <div className="data-details-head">Proof of Address (e.g., utility bill, bank statement for the business)</div>
                      <ul className="data-details-docs">
                        <li>
                          <span className="data-details-docs-title"></span>
                          <div className="data-doc-item data-doc-item-lg">
                            <div className="data-doc-image">
                              {user.proof_of_address && (
                                <img
                                  src={`data:image/jpeg;base64, ${user.proof_of_address}`}
                                  alt="Proof of Address"
                                />
                              )}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <ul className="data-details-list">
                    <li>
                      <div className="data-details-head">Trade Licences (for specific industries or activities)</div>
                      <ul className="data-details-docs">
                        <li>
                          <span className="data-details-docs-title"></span>
                          <div className="data-doc-item data-doc-item-lg">
                            <div className="data-doc-image">
                              {user.trade_licences && (
                                <img
                                  src={`data:image/jpeg;base64, ${user.trade_licences}`}
                                  alt="Trade Licences"
                                />
                              )}
                            </div>
                            
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
              <div className="gaps-3x"></div>
              <h6 className="card-sub-title">More Information</h6>
              <ul className="data-details-list">
                <li>
                  <div className="data-details-head">Status</div>
                  <div className="data-details-des">{user.status}</div>
                </li>
                <li>
                  <div className="data-details-head">Date</div>
                  <div className="data-details-des">{user.date}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8">
              {/* <ul className="footer-links">
                <li><a href="/#/faqpage">FAQs</a></li>
                <li><a href="/#/policy">Privacy Policy</a></li>
              </ul> */}
            </div>
            <div className="col-md-4 mt-2 mt-sm-0">
              <div className="d-flex justify-content-between justify-content-md-end align-items-center guttar-25px pdt-0-5x pdb-0-5x">
                <div className="copyright-text">&copy; 2023 MUDA KYC Project.</div>
                <div className="lang-switch relative">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
