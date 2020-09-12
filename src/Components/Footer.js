import React from 'react';
import '../App.css';
import cal from '../assert/call.png';
import face from '../assert/Black-icon-facebook-logo-PNG.png';
import world from '../assert/www.png';



function Footer() {
    return (
        <div>
            <div className="boxs">
                <div className="row-1">
                    <div className="col-3">
                        <h3><img src={cal} alt="caller" className="call"/></h3>
                        <h2 className="toll">Toll free<b> 1800 200 1234</b></h2>
                    </div>
                    <div className="col-4">
                        <h3><img src={face} alt="caller" className="face"/></h3>
                        <h2 className="toll"><a href ="https://www.facebook.com/cripumps" className="toll">www.facebook.com/cripumps</a></h2>
                    </div>
                    <div className="col-5">
                        <h3><img src={world} alt="caller" className="call"/></h3>
                        <h2 className="toll"><a href ="https://www.crigroups.com" className="toll">www.crigroups.com</a></h2>
                    </div>
                   

                </div>
            </div>
        </div>

    );
}

export default Footer;
