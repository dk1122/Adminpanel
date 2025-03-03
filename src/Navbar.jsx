import {CiSearch} from "react-icons/ci"
import { useState } from 'react';
import './Navbar.css';
import ToggleButton from "./Togglebutton";
import Dropdown from "./Dropdown";
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    // const handleNavigate = () => {
    //     navigate('./Newpage'); // Navigate to the AboutPage onClick( ()=> {navigate("./Newpage")})
    // };
    const page = 0; 
    const total = 200; 
    const [count, setCount] = useState(0);
    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;

        if (checked) {
            setCount((prevCount) => prevCount + 1); // Update based on the previous state
        } else {
            setCount((prevCount) => prevCount - 1); // Update based on the previous state
        }
    };

    return (
    <>
        <div><h1>Customers</h1></div>
        <div id="search">
            <div class="search-container" >
                <input
                    type="text"
                    class="search-input"
                    placeholder="Search"
                />
                <CiSearch class="search-icon" />
            </div>
            <button style={{border:'solid 1px black ', background:'rgb(106, 39, 214)' , borderRadius:'5px', height:'30px', alignItems:'end' , padding:'0 10px', marginTop:'30px' , marginRight:'10px'}} onClick={()=>{navigate("./Newpage")}}> + New Customers </button>
        </div>
        <div style={{marginTop:'30px'}}>
            <label style={{marginLeft:'80px'}} htmlFor="">{count} </label><label htmlFor="">Selected</label>
            <button style={{marginLeft:'20px' , marginBottom:'5px'}}  class="delete"><i className="fas fa-trash-alt"></i> Delete</button>
            <label htmlFor="" id="page">{page} out of {total} </label>
            <div className="Navtable">
                <table className="Table">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Business Names </td>
                            <td>E-mail</td>
                            <td>Contact</td>
                            <td>Date</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Balance</td>
                            <td>Active/Disabled</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" className="checkbox" id="1"onChange={handleCheckboxChange} /></td>
                            <td>Balagopal Jewllery</td>
                            <td>balaji@gmail.com</td>
                            <td>65435658432</td>
                            <td>09/01/2025</td>
                            <td>10/02/2025</td>
                            <td>10/02/2026</td>
                            <td>267000</td>
                            <td><ToggleButton/></td>
                            <td>
                                <button class="delete"><i className="fas fa-trash-alt"></i>Delete</button>
                                <Dropdown/>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="checkbox" id="2" onClick={handleCheckboxChange}/></td>
                            <td>SilverSpark Textiles</td>
                            <td>info@silverspark.com</td>
                            <td>9876543210</td>
                            <td>08/15/2024</td>
                            <td>08/15/2025</td>
                            <td>08/15/2026</td>
                            <td>180000</td>
                            <td><ToggleButton/></td>
                            <td>
                                <button class="delete"><i className="fas fa-trash-alt"></i> Delete</button>
                                <Dropdown/>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="checkbox" id="3" onClick={handleCheckboxChange}/></td>
                            <td>GoldenTouch Electronics</td>
                            <td>support@goldentouch.com</td>
                            <td>7654321098</td>
                            <td>07/20/2024</td>
                            <td>07/20/2025</td>
                            <td>07/20/2026</td>
                            <td>320000</td>
                            <td><ToggleButton/></td>
                            <td>
                                <button class="delete"><i className="fas fa-trash-alt"></i> Delete</button>
                                <Dropdown/>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="checkbox" id="4" onClick={handleCheckboxChange}/></td>
                            <td>Crystal Clear Solutions</td>
                            <td>contact@crystalclear.com</td>
                            <td>8765432109</td>
                            <td>06/10/2024</td>
                            <td>06/10/2025</td>
                            <td>06/10/2026</td>
                            <td>150000</td>
                            <td><ToggleButton/></td>
                            <td>
                                <button class="delete"><i className="fas fa-trash-alt"></i> Delete</button>
                                <Dropdown/>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="checkbox" id="5" onClick={handleCheckboxChange}/></td>
                            <td>UrbanDesign Architects</td>
                            <td>hello@urbandesign.com</td>
                            <td>6547893210</td>
                            <td>05/25/2024</td>
                            <td>05/25/2025</td>
                            <td>05/25/2026</td>
                            <td>275000</td>
                            <td><ToggleButton/></td>
                            <td>
                                <button class="delete"><i className="fas fa-trash-alt"></i> Delete</button>
                                <Dropdown/>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="checkbox" id="6" onClick={handleCheckboxChange}/></td>
                            <td>Bright Future Academy</td>
                            <td>admissions@brightfuture.com</td>
                            <td>5432109876</td>
                            <td>04/01/2024</td>
                            <td>04/01/2025</td>
                            <td>04/01/2026</td>
                            <td>120000</td>
                            <td><ToggleButton/></td>
                            <td>
                                <button class="delete"><i className="fas fa-trash-alt"></i> Delete</button>
                                <Dropdown/>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="checkbox" id="7" onClick={handleCheckboxChange}/></td>
                            <td>Technovate Innovations</td>
                            <td>info@technovate.com</td>
                            <td>7894561230</td>
                            <td>03/10/2024</td>
                            <td>03/10/2025</td>
                            <td>03/10/2026</td>
                            <td>350000</td>
                            <td><ToggleButton/></td>
                            <td>
                                <button class="delete"><i className="fas fa-trash-alt"></i> Delete</button>
                                <Dropdown/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </>  );
}
 
export default Navbar;