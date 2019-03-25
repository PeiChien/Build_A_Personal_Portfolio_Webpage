import React from 'react';
import cssObj from '@/css/MyInfo.less';
class MyInfo extends React.Component{
    render(){
        return (
            <div className={cssObj.myinfo}>
                <div className="container">
                    <div className="row">
                        <div className={[cssObj['myinfo-left'],'col-xs-6 ','text-center'].join(' ')}>
                            <div><strong>ABOUT THIS PAGE</strong></div>
                            <div>Made with <i className="fa fa-coffee"></i> and <i className="fa fa-music"></i> by <a target="_blank" style={{color:'black'}} href="https://www.zhihu.com/people/qian-pei-18/activities">PeiChien</a></div>
                        </div>
                        <div className={[cssObj['myinfo-right'],'col-xs-6 ','text-center'].join(' ')}>
                            <div><strong>AROUND THE WEB</strong></div>
                            <div className="icon">
                                <a target="_blank" href="#"><i className="fa fa-facebook-square"></i></a>
                                <a target="_blank" href="#"><i className="fa fa-twitter-square"></i></a>
                                <a target="_blank" href="#"><i className="fa fa-linkedin-square"></i></a>
                                <a target="_blank" href="https://github.com/PeiChien"><i className="fa fa-github-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyInfo;