import React, { Component } from 'react';
import './CountryInfo.css'

class CountryInfo extends Component {
    render() {
        return (
            <div className="country-info-container">
                <input type="radio" name="visible" id="show" value="show" className="show-checkbox" />
                <input type="radio" name="visible" id="hide" value="hide" className="show-checkbox" checked/>

                <p className="country-info">
                    Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния
                    (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) — суверенное государство на юго-западе
                    Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %)
                    Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504 782 км²
                    (вместе с небольшими суверенными территориями на африканском побережье, городами Сеута и Мелилья),
                    являясь четвёртой по величине страной в Европе (после России, Украины и Франции).
                </p>
                <div className="show-more-link-container">
                    <label htmlFor="show"><span className="show-more-link">Показать все</span></label>
                    <label htmlFor="hide"><span className="hide-link">Скрыть</span></label>
                </div>

            </div>
        );
    }
}

export default CountryInfo
