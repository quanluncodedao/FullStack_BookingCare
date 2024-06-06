import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    
    render() {
        
       
        return (
            <div className='home-footer'>
                <p>&copy; Hello TMQ More information. 
                    <a target='_blank' href='https://www.youtube.com/watch?v=dLQe4qEfVJw&list=RDcUmpJ2zwfVU&index=2'> 
                    &#8594; Click Here &#8592;
                    </a> 
                </p>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);