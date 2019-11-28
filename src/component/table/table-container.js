import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Table from "./table";
import './table.scss';
import {
    activeFilters,
    filterUsers,
    findDuplicateProfession,
    getFilterProfession,
    getUsersHobby
} from "../../selectors/user-selectors";
import {filterProfAC, filterHobbyAC} from "../../actions/actions";

class TableContainer extends Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange = (e) => {
        this.props.filterProfAC(e.target.value)
    };

    findHobbies = (users) => {
        const hobby = users.reduce((acc, user) => {
            return acc.includes(user.hobby) ? acc : [...acc, user.hobby]
        }, []);
        return hobby.map((h, index) => <button onClick={() => this.props.filterHobbyAC(h)} key={index}>{h}</button>)
    };

    render() {
        const { users, usersState } = this.props;
        return (
            <Fragment>
                <div className='headers-page'>
                    <form onSubmit={this.handleSubmit} className='form'>
                        <select onChange={this.handleChange}>
                            {findDuplicateProfession(usersState)}
                        </select>
                    </form>
                    <div className='filter-btn'>
                        <h3 className='filter-btn-name'>Hobbies:</h3>
                            {this.findHobbies(users)}
                    </div>
                </div>
                <Table users={users}/>
            </Fragment>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        currentProfession: getFilterProfession(state),
        currentHobby: getUsersHobby(state),
        users: filterUsers(state),
        usersState: state.users,
        activeFilter: activeFilters(state)
    }
};

export default connect(mapStateToProps, {filterProfAC, filterHobbyAC})(TableContainer);