import React from 'react';
import cssObj from '@/css/MainParts.less';
class MainParts extends React.Component{
    render(){
        return <div className="container" id={cssObj.mainPart}>
            <div id="Home" className={cssObj.Home}>
                <h1>Home部分</h1>
            </div>
            <div id="About" className={cssObj.About}>
                <h1>About部分</h1>
            </div>
            <div id="Contact" className={cssObj.Contact}>
                <button id="easy">简单难度</button>
                <button id="common">普通难度</button>
                <button id="hard">炼狱难度</button>
        </div>
    </div>
    }

}

export default MainParts;