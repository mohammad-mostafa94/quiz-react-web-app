import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const Home = () => {
    return (
        <Fragment>
            <Helmet><title>Quiz App - Home</title></Helmet>
            <div id="home">
                <section>
                    <div>
                        <span className="mdi mdi-cube-outline mdi-48px"></span>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Home;