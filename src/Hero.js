import React from 'react'

export default function Hero(props) {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
        </section>
    );
}