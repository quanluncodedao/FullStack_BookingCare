import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HandBook from './Section/HandBook';
import './HomePage.scss';
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            
        }
        let settings1 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            
        }
        return (
            <div>
                <HomeHeader />
                <Specialty 
                    settings = {settings}/>
                <MedicalFacility 
                    settings = {settings}/>
                <OutStandingDoctor 
                    settings = {settings}/>
                <HandBook 
                    settings = {settings1}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);