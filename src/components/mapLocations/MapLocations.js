import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCountries } from "./MapLocations.redux";

import "./MapLocations.scss";

class MapLocations extends Component {
  static propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({})),
    getCountries: PropTypes.func.isRequired
  };

  static defaultProps = { countries: [] };

  constructor(props) {
    super(props);
    this.state = {
      locations: props.countries
    };
  }

  componentDidMount() {
    const { getCountries: onGetCountries } = this.props;
    onGetCountries();
  }

  componentWillReceiveProps({ countries }) {
    if (countries && countries.length) {
      this.setState({ locations: countries });
    }
  }

  render() {
    const { locations } = this.state;
    const { getCountries: onGetCountries } = this.props;
    return (
      <div className="locations-container">
        <button type="button" className="button" onClick={onGetCountries}>
          <span>Reload </span>
        </button>
        <div className="locations-grid">
          {locations.map((countrie, index) => (
            <div key={index} className="country-box">
              <span key={index}>{countrie.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { countries } = state.locations;
  return { countries };
};

export default connect(
  mapStateToProps,
  { getCountries }
)(MapLocations);
