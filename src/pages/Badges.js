import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/platziconf-logo.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    this.fetchData("http://localhost:3001/badges");
  }

  fetchData = async (url) => {
    this.setState({ loading: true, error: null });
    try {
      const API = await fetch(url);
      const data = await API.json();
      // console.log(data);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    console.log("2. render()");

    if (this.state.loading) return <Loader />;

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="ConfLogo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badge/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <ul className="list-unstyled">
                {this.state.data.map((badge) => {
                  return (
                    <BadgesList
                      key={badge.id}
                      firstName={badge.firstName}
                      lastName={badge.lastName}
                      jobTitle={badge.jobTitle}
                      twitter={badge.twitter}
                      avatarUrl={badge.avatarUrl}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
