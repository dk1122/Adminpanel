import React from 'react';
import './Sidebar.css';
import image from './icon.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const nav = useNavigate();

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a>
                       <i onClick={() => { nav("/") }}><img style={{ height: '22px', width: '22px' }} src={image} alt="" /> </i>
                    </a>
                </li>
                <li>
                    <a href="#folks">
                        <i className="fas fa-user-friends icon-color"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i onClick={() => { nav("/Settings") }} className="fas fa-gear icon-color"></i>
                    </a>
                </li>
                <li style={{ marginTop: '450px' }}>
                    <a style={{ color: 'red' }} href="#logout" className='Logout'>
                        <i className="fas fa-sign-out"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;