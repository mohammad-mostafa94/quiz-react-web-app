import React, { Fragment } from 'react';
import {link} from 'react-router-dom';
import Helmet from 'react-helmet';

const QuizInstructions = () => {
    return (
        <Fragment>
            <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
            <div className="instructions container">
                <h1>How to play the Game</h1>
                <p>Ensure you read this guide from start to finish.</p>
                <ul className="browser-default" id="main-list">
                    <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                    <li>Each game consists of  15 questions.</li>
                    <li>
                        Every question contains 4 options.
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default QuizInstructions;