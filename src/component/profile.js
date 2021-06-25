import React from "react";
import propTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Myprofile = (props) => {
    console.log(props);
    const mystyle = {
        marginLeft: "200px",
        marginRight: "200px",
        textAlign: "justify"
    };
    function HandleName() {
        return alert(`Welcome to the profile of ${props.fullName}`);
    }
    return (
        <div>
            <div
                style={{
                    fontFamily: "Arial, cursive ",
                    fontSize: "40px"
                }}
            >
                {props.fullName}
            </div>
            <h3>{props.profession}</h3>
            {props.children}
            <div
                style={{
                    fontFamily: "Arial, cursive",
                    fontSize: "50px"
                }}>
                {props.bio}
            </div>

            <Button variant="dark" onClick={HandleName}>
                Hello{" "}
            </Button>

            <p style={mystyle}>
                {" "}
                <div class="card-text">
                <b>JOHNNY DEPP</b> is perhaps one of the most versatile actors of his day and age in Hollywood.
                He was born John Christopher Depp II in Owensboro, Kentucky, on June 9, 1963, 
                to Betty Sue (Wells), who worked as a waitress, and John Christopher Depp, a civil engineer.
                Depp has played many characters in his career, including another fact-based one, Insp. Fred Abberline in From Hell (2001). He stole the show from screen greats such as Antonio Banderas in the finale to Robert Rodriguez's "mariachi" trilogy, Once Upon a Time in Mexico (2003). In that same year he starred in the marvelous family blockbuster Pirates of the Caribbean: The Curse of the Black Pearl (2003), playing a character that only the likes of Depp could pull off: the charming, conniving and roguish Capt. Jack Sparrow.
                The film's enormous success has opened several doors for his career and included an Oscar nomination.
                </div>
            </p>
        </div>
    );
};
Myprofile.defaultProps = {
    fullName: "profile full name",
    profession: "profile profession",
    bio: "profile biography",
};

Myprofile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func,
};
export default Myprofile;