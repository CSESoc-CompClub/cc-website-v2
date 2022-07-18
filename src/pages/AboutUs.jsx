import React from "react";
import '../AboutUs.css';
import penguin from '../components/AboutUs/penguin.png'

export default function AboutUs () {
    return (
        <div>
            <div id="faqs">
                <div className="center">
                    <div><h2 className="faqsHeading">FAQS</h2></div>
                </div>
                <div>
                    <ul>
                        <li>What types of coding workshops we run?</li>
                        <li>Do we go to schools</li>
                        <li>What ages?</li>
                        <li>Where do we  run our workshops?</li>
                    </ul>
                </div>
            </div>
            <div>
                <div id="interestedInCC">
                    <div>
                        <h3 className="interestedHeading">Interested in CompClub?</h3>
                        <br />
                        <div className="intro">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit ipsum. Quisque ut efficitur dolor. Nulla massa velit, ornare non.
                            </p>
                            <br /><br />
                            <div className="buttons">
                                <button className="contactBtn">Contact us</button>
                                <button className="contactBtn" id="learnMore">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div id="penguin">
                        <img src={penguin} alt="poco the penguin mascot" />
                    </div>
                </div>
            </div>
        </div>
    )
}