"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import styles from './Navbar.module.css';

const Navbar = () => {
  const { data: session } = useSession();
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className={styles.navbar}>
      {/* Button to toggle navbar visibility */}
     

      {/* Navbar links */}
      <ul className={`${styles.navlist} ${navActive ? styles.active : ""}`}>
        <li className={styles.navitem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        {!session ? (
          <>
            <li className={styles.navitem}>
              <Link href="/login">Login</Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <span className={styles.sessionEmail}>{session.user?.email}</span>
            <li>
              <button
                onClick={() => {
                  signOut();
                }}
                className={styles.button}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
