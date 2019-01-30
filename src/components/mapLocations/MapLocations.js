import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCountries } from './MapLocations.redux';

import './MapLocations.scss';

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

  componentWillReceiveProps({countries}) {
    if (countries && countries.length) {
      this.setState({ locations: countries });
    }
  }

  render() {
    const { locations } = this.state;
    return (
      <div>
        {locations.map((countrie,index) => (
          <p key={index}>{countrie.name}</p>
        ))}
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { countries } = state.locations;
  return { countries };
};

export default connect(
  mapStateToProps,
  { getCountries }
)(MapLocations);

