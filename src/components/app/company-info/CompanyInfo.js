import React, { Component } from 'react';
import './CompanyInfo.css'
import Carousel from './carousel/Carousel'
import CounrtyInfo from './country-info/CountryInfo'

class CompanyInfo extends Component {
    render() {
        return (
            <div className="company-info">
                <Carousel/>
                <CounrtyInfo/>
            </div>
        );
    }
}

export default CompanyInfo
