import React from 'react';
import '../App.css';
import cal from '../assert/call.png';


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
                        <h3><img src={cal} alt="caller" className="call"/></h3>
                        <h2 className="toll">Toll free<b> 1800 200 1234</b></h2>
                    </div>
                    <div className="col-5">
                        <h3><img src={cal} alt="caller" className="call"/></h3>
                        <h2 className="toll">Toll free<b> 1800 200 1234</b></h2>
                    </div>
                   

                </div>
            </div>
        </div>

    );
}

export default Footer;
