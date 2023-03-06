import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const NotFound = () => {
  return (
    <>
      <PageTitle title="404" />

      <div className="not-found-wrapper">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <Link className="navbar-brand" to="/">
                <img src="/assets/img/logo/dark.png" alt="brand" />
              </Link>
            </div>

          </div>
        </div>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="vivace_tm_section">
              <div className="container">
                <div className="vivace_tm_error">
                  <div className="vivace_tm_error_inner">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link to="/" className="ib-button">
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-wrapper">

        </footer>
      </div>
    </>
  );
};

export default NotFound;
