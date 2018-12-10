import React, { Component } from 'react';
import './CountryInfo.css'

class CountryInfo extends Component {
    constructor()
    {
        super();
        this.state = {showMore: false}

    }
    render() {
        return (
            <div className="country-info-container">
                <p className = {this.state.showMore ? "country-info full-info" : "country-info"}>
                    Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния
                    (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) — суверенное государство на юго-западе
                    Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %)
                    Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504 782 км²
                    (вместе с небольшими суверенными территориями на африканском побережье, городами Сеута и Мелилья),
                    являясь четвёртой по величине страной в Европе (после России, Украины и Франции).
                </p>
                <div className="show-more-link-container">
                    {this.state.showMore ?
                        <label onClick={() => this.setState({showMore: false})}>
                            <span className="hide-link">Скрыть</span>
                        </label>
                        : <label onClick={() => this.setState({showMore: true})}>
                            <span className="show-more-link">Показать все</span>
                        </label>
                    }
                </div>

            </div>
        );
    }
}

export default CountryInfo
