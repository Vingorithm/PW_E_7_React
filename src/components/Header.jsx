import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
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
            <div className="navbar">
                {/* Logo */}
                <div className="logo">
                    <a href="/">
                        <img src="./images/logo.png" alt="Logo" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="container-linkz">
                    <div className="linkz">
                        <a className="navlink button-nav" href="/catalog">Catalog</a>
                        <a className="navlink button-nav" href="/upcoming">Upcoming</a>
                        <a className="navlink button-nav" href="/information">Information</a>
                    </div>
                </div>

                {/* User Login/Dropdown */}
                <div className="container-loginz">
                    {isLoggedIn ? (
                        <div className="user-info" onClick={handleDropdownToggle}>
                            <img src="./images/profile.png" alt="User Photo" className="user-photo" />
                            <span className="user-name fw-bold">Lucas</span>
                            {dropdownVisible && (
                                <div className="dropdown">
                                    <a href="/profile" className="dropdown-item" id="profileDetail">
                                        <i className="fas fa-eye"></i> Detail
                                    </a>
                                    <a href="/tambahLelang" className="dropdown-item" id="tambahLelangButton">
                                        <i className="fas fa-plus-circle"></i> Tambah Lelang
                                    </a>
                                    <a href="/kelola_lelang" className="dropdown-item" id="lelangSayaButton">
                                        <i className="fas fa-auction"></i> Lelang Saya
                                    </a>
                                    <a
                                        href="/"
                                        className="dropdown-item logout"
                                        id="logoutButton"
                                        onClick={handleLogout}
                                    >
                                        <i className="fas fa-sign-out-alt"></i> Logout
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a className="loginlink button-nav" href="/login" style={{ display: 'flex' }}>
                            Login / Register
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
