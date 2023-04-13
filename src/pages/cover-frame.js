import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./cover-frame.css";

const CoverFrame = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="cover-frame">
        <div className="cover-frame-child" />
        <img className="cover-frame-item" alt="" src="/group-16@2x.png" />
        <img className="cover-frame-inner" alt="" src="/group-17.svg" />
        <div className="made-by-team">Made by Team Locofy</div>
        <div className="travel-website-wrapper">
          <div className="travel-website">Travel Website</div>
        </div>
        <div className="homepage">
          <div className="hero-section">
            <header className="top-header">
              <div className="top-container">
                <img
                  className="fickleflight-logo-icon"
                  alt=""
                  src="/fickleflight-logo.svg"
                />
                <div className="navigation-right">
                  <div className="navigation-menu">
                    <div className="explore">Explore</div>
                    <div className="search">Search</div>
                    <div className="hotels">Hotels</div>
                    <div className="offers">Offers</div>
                  </div>
                  <div className="account-section">
                    <img
                      className="hamburger-menu-icon"
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className="notification-bell-icon"
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className="unsplashd1upkifd04a-icon"
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="search-section">
              <div className="banner-gradient" />
              <img
                className="banner-background"
                alt=""
                src="/banner--background@2x.png"
              />
              <div className="search-container">
                <div className="title">
                  <div className="lets-explore">{`Let’s explore & travel the world`}</div>
                  <div className="find-the-best">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="search-form">
                  <div className="inputs-row">
                    <div className="input-group">
                      <Autocomplete
                        className="departure-field"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                    </div>
                    <div className="input-group">
                      <div className="arrival-field">
                        <div className="input">
                          <div className="label-container">
                            <div className="arrival">Arrival</div>
                          </div>
                          <div className="active">
                            <div className="muiautocompletetag">
                              <div className="chip">
                                <div className="container">
                                  <div className="avatar">
                                    <div className="op">F</div>
                                  </div>
                                  <div className="typography">
                                    <div className="chip1">Chip</div>
                                  </div>
                                  <img
                                    className="notification-bell-icon"
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className="chip">
                                <div className="container">
                                  <div className="avatar">
                                    <div className="op">F</div>
                                  </div>
                                  <div className="typography">
                                    <div className="chip1">Chip</div>
                                  </div>
                                  <img
                                    className="notification-bell-icon"
                                    alt=""
                                    src="/cancel1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="los-angeles-la">
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="departure-field">
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="primary"
                              variant="outlined"
                              size="medium"
                              renderInput={{ placeholder: "01/05/2022" }}
                              helperText=""
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="button-group">
                    <div className="search-flights-button">
                      <div className="button">Search flights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contents">
            <div className="upcoming-flight-section">
              <b className="upcoming-flight">Upcoming Flight</b>
              <div className="flight-details">
                <div className="flight-main-container">
                  <div className="to-and-from">
                    <div className="from-details">
                      <b className="sin">SIN</b>
                      <div className="singapore">Singapore</div>
                    </div>
                    <div className="duration">
                      <b className="h-55m">15H 55M</b>
                      <img
                        className="duration-child"
                        alt=""
                        src="/group-171.svg"
                      />
                    </div>
                    <div className="to-details">
                      <b className="lax">LAX</b>
                      <div className="los-angeles">Los Angeles</div>
                    </div>
                  </div>
                  <div className="horizontal-line" />
                  <div className="departure-details">
                    <div className="departs-on-1">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="days-to-go-container">
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className="line-separator" />
                <div className="prepare-menu">
                  <div className="prepare-for-your">Prepare for your trip</div>
                  <div className="trip-menus">
                    <button className="hotel">
                      <img className="hotel-child" alt="" src="/group-21.svg" />
                      <div className="hotel1">Hotel</div>
                    </button>
                    <button className="hotel">
                      <div className="hotel-child">
                        <div className="group-child" />
                        <img className="group-icon" alt="" src="/group.svg" />
                      </div>
                      <div className="attractions1">Attractions</div>
                    </button>
                    <button className="hotel">
                      <img
                        className="hotel-child"
                        alt=""
                        src="/group-211.svg"
                      />
                      <div className="eats1">Eats</div>
                    </button>
                    <button className="hotel">
                      <div className="hotel-child">
                        <div className="group-item" />
                        <img className="vector-icon" alt="" src="/vector.svg" />
                      </div>
                      <div className="commute1">Commute</div>
                    </button>
                    <button className="hotel">
                      <div className="rectangle-container">
                        <div className="group-inner" />
                        <img
                          className="vector-icon1"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="taxi1">Taxi</div>
                    </button>
                    <button className="hotel">
                      <div className="hotel-child">
                        <div className="rectangle-div" />
                        <img
                          className="vector-icon2"
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                      <div className="movies1">Movies</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-destinations-main">
              <div className="destinations-titles">
                <div className="title-container">
                  <b className="prepare-for-your">Plan your next trip</b>
                  <b className="most-popular-destinations">
                    Most Popular Destinations
                  </b>
                </div>
                <a className="view-all-top" href="#">
                  <div className="view-all-destinations">
                    View all destinations
                  </div>
                  <img
                    className="notification-bell-icon"
                    alt=""
                    src="/arrowright.svg"
                  />
                </a>
              </div>
              <div className="cards-container">
                <button className="card-1">
                  <div className="unsplashnnzkznywhau-parent">
                    <img
                      className="unsplashnnzkznywhau-icon"
                      alt=""
                      src="/unsplashnnzkznywhau@2x.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Paris</b>
                      <div className="parent">
                        <div className="div">$699</div>
                        <div className="from">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="card-1">
                  <div className="unsplashnnzkznywhau-parent">
                    <img
                      className="unsplashnnzkznywhau-icon"
                      alt=""
                      src="/unsplashyc8qqp50bda@2x.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Greece</b>
                      <div className="group">
                        <div className="div1">$1079</div>
                        <div className="from1">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="card-1">
                  <div className="unsplashnnzkznywhau-parent">
                    <img
                      className="unsplashnnzkznywhau-icon"
                      alt=""
                      src="/unsplashltnpejwdsay@2x.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Norway</b>
                      <div className="parent">
                        <div className="div">$895</div>
                        <div className="from">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="card-1">
                  <div className="unsplashnnzkznywhau-parent">
                    <img
                      className="unsplashnnzkznywhau-icon"
                      alt=""
                      src="/unsplashm0oiyn5u8zm@2x.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Tuscany</b>
                      <div className="parent2">
                        <div className="div3">$1245</div>
                        <div className="from3">from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="view-all-bottom">
                <div className="view-all-destinations1">
                  View all destinations
                </div>
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="recommended-holidays-container">
              <div className="rec-title">
                <b className="recommended-holidays">Recommended Holidays</b>
                <a className="view-all-holidays-parent" href="#">
                  <div className="view-all-holidays">View all holidays</div>
                  <img
                    className="notification-bell-icon"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </a>
              </div>
              <div className="rec-cards-container">
                <button className="rec-card-1">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/unsplash5mv818tzxeo@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Bali</div>
                        <div className="d3n">4D3N</div>
                      </div>
                      <div className="div4">$899</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-1">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/unsplashj82dskoxvy8@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Switzerland</div>
                        <div className="d3n">6D5N</div>
                      </div>
                      <div className="div5">$900</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-3">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/unsplash4ezkckxolre@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Boracay</div>
                        <div className="d3n">5D4N</div>
                      </div>
                      <div className="div4">$699</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-4">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/unsplashuyqmxhjr3ne@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="rec-title">
                      <div className="bali-parent">
                        <div className="bali">Palawan</div>
                        <div className="d3n">4D3N</div>
                      </div>
                      <div className="div7">$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="view-all-bottom1">
                <div className="view-all-holidays1">View all holidays</div>
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="/arrowright3.svg"
                />
              </div>
            </div>
            <form className="popular-stays">
              <div className="popular-stays-header">
                <div className="popular-stays-title">
                  <b className="popular-stays1">Popular Stays</b>
                </div>
                <a className="view-all-stays-parent" href="#">
                  <div className="view-all-stays">View all stays</div>
                  <img
                    className="notification-bell-icon"
                    alt=""
                    src="/arrowright4.svg"
                  />
                </a>
              </div>
              <div className="hotel-cards">
                <div className="hotel-card-1">
                  <a className="hotel-card" href="#">
                    <img
                      className="unsplashhhrfsdwxxus-icon"
                      alt=""
                      src="/unsplashrlwe8f8anoc@2x.png"
                    />
                    <div className="stay-details">
                      <div className="entire-bungalow-parent">
                        <div className="entire-bungalow">Entire bungalow</div>
                        <b className="matterhorn-suites">Matterhorn Suites</b>
                        <div className="night">$575/night</div>
                      </div>
                      <img className="video-icon" alt="" src="/video.svg" />
                    </div>
                    <div className="rating">
                      <div className="reviews">(60 reviews)</div>
                      <div className="parent3">
                        <div className="div8">4.9</div>
                        <img
                          className="vector-icon3"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </a>
                </div>
                <div className="hotel-card-1">
                  <a className="hotel-card" href="#">
                    <img
                      className="unsplashhhrfsdwxxus-icon"
                      alt=""
                      src="/unsplashtsn8bpopveo@2x.png"
                    />
                    <div className="stay-details1">
                      <div className="entire-bungalow-parent">
                        <div className="entire-bungalow">
                          2-Story beachfront suite
                        </div>
                        <b className="matterhorn-suites">Discovery Shores</b>
                        <div className="night">$360/night</div>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="reviews">(116 reviews)</div>
                      <div className="parent3">
                        <div className="div8">4.8</div>
                        <img
                          className="vector-icon3"
                          alt=""
                          src="/vector4.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </a>
                </div>
                <div className="hotel-card-1">
                  <a className="hotel-card2" href="#">
                    <img
                      className="unsplashhhrfsdwxxus-icon"
                      alt=""
                      src="/unsplashrlwe8f8anoc1@2x.png"
                    />
                    <div className="stay-details1">
                      <div className="entire-bungalow-parent">
                        <div className="entire-bungalow">Single deluxe hut</div>
                        <b className="arctic-hut">{`Arctic Hut `}</b>
                        <div className="night">$420/night</div>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="reviews2">(78 reviews)</div>
                      <div className="parent5">
                        <div className="div10">4.7</div>
                        <img
                          className="vector-icon5"
                          alt=""
                          src="/vector5.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </a>
                </div>
                <div className="hotel-card-4">
                  <a className="hotel-card3" href="#">
                    <img
                      className="unsplashhhrfsdwxxus-icon"
                      alt=""
                      src="/unsplashyqrybvxug5q@2x.png"
                    />
                    <div className="stay-details">
                      <div className="entire-bungalow-parent">
                        <div className="entire-bungalow">Deluxe King Room</div>
                        <b className="arctic-hut">Lake Louise Inn</b>
                        <div className="night">$244/night</div>
                      </div>
                      <img className="video-icon" alt="" src="/video1.svg" />
                    </div>
                    <div className="rating">
                      <div className="reviews">(63 reviews)</div>
                      <div className="parent3">
                        <div className="div8">4.6</div>
                        <img
                          className="vector-icon3"
                          alt=""
                          src="/vector6.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button1">More details</div>
                    </button>
                  </a>
                </div>
              </div>
              <div className="view-all-stays-group">
                <div className="view-all-stays1">View all stays</div>
                <img
                  className="notification-bell-icon"
                  alt=""
                  src="/arrowright5.svg"
                />
              </div>
            </form>
          </div>
          <div className="footer-section">
            <div className="rectangle-parent1">
              <img className="frame-child" alt="" src="/rectangle-186@2x.png" />
              <div className="share-your-travels-form">
                <div className="form-header">
                  <b className="prepare-for-your">
                    subscribe to our newsletter
                  </b>
                  <b className="form-title">Get weekly updates</b>
                </div>
                <div className="form">
                  <div className="form-text">
                    <div className="fill-in-your">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="form-text">
                      <TextField
                        className="input1"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="form-text">
                      <TextField
                        className="input1"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="button5">
                    <div className="unstyledbutton">
                      <div className="button6">submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="fickleflight-bio">
                <img
                  className="fickleflight-logo-icon"
                  alt=""
                  src="/logo.svg"
                />
                <div className="fickle-flight-is">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img className="social-icons" alt="" src="/social-icons.svg" />
              </div>
              <div className="footer-child" />
              <div className="footer-links">
                <div className="company">
                  <a className="about-us">About Us</a>
                  <div className="company1">Company</div>
                  <div className="news">News</div>
                  <div className="careers">Careers</div>
                  <div className="how-we-work">How we work</div>
                </div>
                <div className="company">
                  <div className="account">Account</div>
                  <div className="support1">Support</div>
                  <div className="support-center">Support Center</div>
                  <div className="faq">FAQ</div>
                  <div className="accessibility">Accessibility</div>
                </div>
                <div className="more">
                  <div className="covid-advisory">Covid Advisory</div>
                  <div className="more1">More</div>
                  <div className="airline-fees">Airline Fees</div>
                  <div className="tips">Tips</div>
                  <div className="how-we-work">Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;
