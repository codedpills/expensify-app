import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go to create expense page</NavLink> 
        <NavLink to="/help" activeClassName="is-active">Go to help page</NavLink>
    </header>
);

export default Header;