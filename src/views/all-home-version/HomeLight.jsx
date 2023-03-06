import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import PageTitle from "../../components/PageTitle";

const HomeLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="Home" />

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>

      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/img/logo/dark.png" alt="brand" />
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="vivace_tm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <About />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
