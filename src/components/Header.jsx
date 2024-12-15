import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';
import profileImage from '../assets/images/profile.png';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.page-navbar.user-info') &&
                !event.target.closest('.page-navbar.dropdown')) {
                setDropdownVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        window.location.href = "/";
    };

    return (
        <header>
            <div className="page-navbar navbar p-0 " style={{ height: '110px' }}>
                {/* Logo */}
                <div className="page-navbar logo">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="page-navbar container-linkz">
                    <div className="page-navbar linkz">
                        <a className="page-navbar button-nav" href="/catalog">Catalog</a>
                        <a className="page-navbar button-nav" href="/upcoming">Upcoming</a>
                        <a className="page-navbar button-nav" href="/information">Information</a>
                    </div>
                </div>

                {/* User Login/Dropdown */}
                <div className="page-navbar container-loginz">
                    {isLoggedIn ? (
                        <div className="page-navbar user-info" onClick={handleDropdownToggle}>
                            <img src={profileImage} alt="User Photo" className="page-navbar user-photo" />
                            <span className="page-navbar user-name fw-bold">Lucas</span>
                                <div className={`page-navbar dropdown ${dropdownVisible ? 'visible' : ''}`}>
                                    <a href="/profile" className="page-navbar dropdown-item" id="profileDetail">
                                        <i className="fas fa-eye"></i> Detail
                                    </a>
                                    <a href="/tambahLelang" className="page-navbar dropdown-item" id="tambahLelangButton">
                                        <i className="fas fa-plus-circle"></i> Tambah Lelang
                                    </a>
                                    <a href="/kelola_lelang" className="page-navbar dropdown-item" id="lelangSayaButton">
                                        <i className="fas fa-gavel"></i> Lelang Saya
                                    </a>
                                    <a
                                        href="/"
                                        className="page-navbar dropdown-item logout"
                                        id="logoutButton"
                                        onClick={handleLogout}
                                    >
                                        <i className="fas fa-sign-out-alt"></i> Logout
                                    </a>
                                </div>
                        </div>
                    ) : (
                        <a className="page-navbar loginlink page-navbar button-nav" href="/login">
                            Login / Register
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
