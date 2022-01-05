import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#002552" , height: "68px"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <form style={{marginLeft: "20px"}} className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li id={styles.myDropdown} className="nav-item dropdown">
                                <a
                                    className="btn dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <BsList id={styles.menu_Icon} />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" href="/">
                                            <p>
                                                <FcHome className={styles.dropdown_Icons} />{" "}
                                                <span className={styles.links}>Home</span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/search">
                                            <p>
                                                <BsSearch className={styles.dropdown_Icons} />{" "}
                                                <span className={styles.links}>Search</span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                        <Link className="dropdown-item" href="/search?purpose=for-sale">
                                            <p>
                                                <FcAbout className={styles.dropdown_Icons} />{" "}
                                                <span className={styles.links}>Buy Property</span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/search?purpose=for-rent">
                                            <p>
                                                <FiKey className={styles.dropdown_Icons} />{" "}
                                                <span className={styles.links}>Rent Property</span>
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
        </nav>
        // <div className={styles.myNavbar}>
        //     <Link href="/">
        //         <div>
        //             <h2 className={styles.logo}>Property Deal</h2>
        //         </div>
        //     </Link>

        //     <div id={styles.myDropdown} className="dropdown">
        //         <button
        //             className="btn  dropdown-toggle"
        //             type="button"
        //             id="dropdownMenuButton1"
        //             data-bs-toggle="dropdown"
        //             aria-expanded="false"
        //         >
        //             <BsList id={styles.menu_Icon} />
        //         </button>
        //         <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
        // <li>
        //     <Link className="dropdown-item" href="/">
        //         <p>
        //             <FcHome className={styles.dropdown_Icons} />{" "}
        //             <span className={styles.links}>Home</span>
        //         </p>
        //     </Link>
        // </li>
        //             <li>
        // <Link className="dropdown-item" href="/search">
        //     <p>
        //         <BsSearch className={styles.dropdown_Icons} />{" "}
        //         <span className={styles.links}>Search</span>
        //     </p>
        // </Link>
        //             </li>
        //             <li>
        // <Link className="dropdown-item" href="/search?purpose=for-sale">
        //     <p>
        //         <FcAbout className={styles.dropdown_Icons} />{" "}
        //         <span className={styles.links}>Buy Property</span>
        //     </p>
        // </Link>
        //             </li>
        //             <li>
        // <Link className="dropdown-item" href="/search?purpose=for-rent">
        //     <p>
        //         <FiKey className={styles.dropdown_Icons} />{" "}
        //         <span className={styles.links}>Rent Property</span>
        //     </p>
        // </Link>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    );
}

export default Navbar;
