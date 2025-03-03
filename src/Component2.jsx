import React from 'react';
import Sidebar from './Sidebar';
import './Component2.css';

function Component2() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            {/* <div className="main-content">
                <div className="timetable-container">
                    <h2 className="timetable-title">Time Table</h2>
                    <table className="timetable">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>10:00am - 10:55am</th>
                                <th>11:00am - 11:55am</th>
                                <th>12pm - 1pm</th>
                                <th>1:00pm - 1:55pm</th>
                                <th>2:00pm - 2:55pm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mon</td>
                                <td>Physics</td>
                                <td>Chemistry</td>
                                <td>L</td>
                                <td>Mathematics</td>
                                <td>Computer Science</td>
                            </tr>
                            <tr>
                                <td>Tue</td>
                                <td>Economics</td>
                                <td>History</td>
                                <td>U</td>
                                <td>Business Studies</td>
                                <td>Statistics</td>
                            </tr>
                            <tr>
                                <td>Wed</td>
                                <td>Geography</td>
                                <td>Theatre</td>
                                <td>N</td>
                                <td>Music</td>
                                <td>Electronics</td>
                            </tr>
                            <tr>
                                <td>Thu</td>
                                <td>Physics</td>
                                <td>Chemistry</td>
                                <td>C</td>
                                <td>Mathematics</td>
                                <td>Computer Science</td>
                            </tr>
                            <tr>
                                <td>Fri</td>
                                <td>Economics</td>
                                <td>History</td>
                                <td>H</td>
                                <td>Business Studies</td>
                                <td>Statistics</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
}

export default Component2;