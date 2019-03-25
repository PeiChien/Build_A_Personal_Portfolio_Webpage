import React from 'react';
class NavBar extends React.Component{
    render(){
        return <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <a herf="#" className="navbar-brand"><strong>You're Welcome!</strong></a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Contact">Retro Snaker</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
export default NavBar;