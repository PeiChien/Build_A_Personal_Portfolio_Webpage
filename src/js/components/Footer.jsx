import React from 'react';
import cssObj from '@/css/Footer.less';
class Footer extends React.Component{
    render(){
        return (
            <footer className="navbar-inverse text-center">
                <div id={cssObj.copyrights}>PeiChien © 2019.All Rights Reversed</div>
            </footer>
        )
    }
}
export default Footer;