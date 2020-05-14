import React from "react";
import "./style.css"

function BookContainer(props) {
    const handleClick = event => {
        return props.handleClick(props, event.target.name);
    }

    const buttonDisplay = () => {
        if (props.type && !props.savedBooks.find(book => book.link === props.link)) {
            return <button className="uk-button uk-button-default" name="Save" onClick={handleClick}>Save</button>;
        }

        return <button className="uk-button uk-button-default" name="Remove" onClick={handleClick}>Remove</button>;
    }

    return (
        <div className="BookContainer">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-1">
                <div uk-grid="true">
                    <div className="uk-width-2-3">
                        <h3>{props.title ? props.title : "Title Unknown"}</h3>
                        <h5>{props.subtitle}</h5>
                        <h5>Written By: {props.authors ? props.authors.join(", ") : "Unknown"}</h5>
                    </div>
                    <div className="uk-width-1-3 buttonContainer" uk-margin="true">
                        <a
                            className="uk-button uk-button-default"
                            href={props.link} target="_blank"
                            rel="noreferrer noopener"
                        >
                            View
                        </a>
                        {buttonDisplay()}
                    </div>
                </div>
                <div uk-grid="true">
                    <div className="uk-width-1-6">
                        <img
                            src={props.image ? props.image : "https://via.placeholder.com/150"}
                            alt={props.image ? props.title + " thumbnail" : "placeholder image C/O https://placeholder.com/"}
                        />
                    </div>
                    <div className="uk-width-5-6">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookContainer;