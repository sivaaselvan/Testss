import React from 'react';
import side from '../assert/1.png';
import '../App.css';
import award from '../assert/2.png';
import materials from '../assert/3.png';


function Page() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={side} className="side" alt="Side " />
                </div>
                <div className="col-2">
                    <div className="text-align">
                        <span className="text-1"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                  </span>
                        <ul className="text-size">
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                        </ul>
                        <span className="award"><img src={award} alt="award" className="award-imag" /></span>
                        <p className="text-2">	Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
            </div>
            <div className="text-3">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
            </div>
            <div className="container">
            <img src={materials} alt="materials" className="materials"/>
            <div className="text-3">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            </div>
            </div>
            <hr className="new4"/>

        </div>
    );
}

export default Page;

