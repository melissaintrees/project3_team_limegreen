import React from "react";
import "./AllTimeScore.css";
import allUsersScores from '../../mockdata/userstats'

const AllTimeScore = props => (
    <div>
        <h5>Your all time score is: {allUsersScores.score}</h5>

    </div>
)

export default AllTimeScore;