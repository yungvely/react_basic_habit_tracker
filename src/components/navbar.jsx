import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        const {totalCount} = this.props;
        return (
            <header className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{totalCount}</span>
            </header>
        );
    }
}

export default Navbar;