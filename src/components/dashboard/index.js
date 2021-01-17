import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addEntry, getEntry } from '../authtingsidk/auth';
import moment from 'moment';
const foodkey = "some numbers ig? idek";

const Dashboard = ({
    addEntry,
    getEntry,
    auth: { user },
}) => {

    const [query, setQuery] = useState('');
    const [date, setDate] = useState('');

  useEffect(() => {
    alanBtn({
        key: foodkey,
        onCommand: ({ command, userInput }) => {
            switch (command){
                case 'today': 
                let today = new Date().toISOString().slice(0, 10)
                setQuery(userInput);
                setDate(today);
                break;
                case 'past': 
                var pastRaw = (userInput.split('I')[0]).trim();
                console.log(pastRaw)
                setQuery(userInput);
                setDate(pastRaw)
                break;
            }
        }
    })
}, []);

const submit = () => {
    addEntry({
        user: user._id,
        date: "today",
        query: query,
    })
}

    return (
        <div>
            dashboard
            {query &&
            <button onClick={() => submit()}>hello</button>
            }
        </div>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    addEntry: PropTypes.func.isRequired,
    getEntry: PropTypes.func.isRequired
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { addEntry, getEntry })(
    Dash