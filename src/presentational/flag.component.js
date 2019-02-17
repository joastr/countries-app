import React from 'react';
import '../country.css';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
        <h4>{props.country.name}</h4>
    </div>
);

export default CountryFlag;