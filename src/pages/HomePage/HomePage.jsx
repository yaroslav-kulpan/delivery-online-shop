import React from 'react';

const HomePage = ({match = {  path: '' }}) => {
    return (
        <div className="container mt-5">
            <h1>Home Page {match.path}</h1>
        </div>
    );
};

export default HomePage;