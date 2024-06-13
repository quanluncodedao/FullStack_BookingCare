import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    
    render() {
        
       
        return (
            <div className='section-share section-About'>
                <div className='section-about-header'>
                    Truyền thông nói về đạo đức AI
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/cUmpJ2zwfVU?list=RDcUmpJ2zwfVU" title="SUÝT NỮA THÌ | OFFICIAL OST | CHUYẾN ĐI CỦA THANH XUÂN | ANDIEZ x BITI&#39;S HUNTER | LYRIC VIDEO" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p> - Dành tặng những rung động thanh xuân này cho những người bạn từng tiếc nuối “Suýt nữa thì…” trước crush của mình hay cho cả những mối tình chưa kịp thổ lộ nhé 😉<br></br>
                         - Cũng muốn nhắc nhẹ 😁 “Suýt nữa thì” là OST của “Chuyến Đi của Thanh Xuân” bộ phim ngắn mùa hè này, là lời “nói thay trái tim” cho một số nhân vật trong phim, sẽ RA MẮT vào cuối tháng 7 này. Cả nhà nhớ ủng hộ phim nữa nha…
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);