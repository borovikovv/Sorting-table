import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Table from "./table";
import './table.scss';
import {
    activeFilters,
    filterUsers,
    getFilterProfession,
    getUsersHobby
} from "../../selectors/user-selectors";
import {filterProfession, filterHobby} from "../../actions/actions";

class TableContainer extends Component {

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange = (e) => {
        this.props.filterProfession(e.target.value)
    };

    findDuplicate = (items, itemProps ) => {
        return items.reduce((acc, item) => {
            return acc.includes(item[itemProps]) ? acc : [...acc, item[itemProps]]
        }, []);
    };

    findDuplicateProfession = (users) => {
        const prof = this.findDuplicate(users, 'profession');
        return prof.map((p, index) => <option key={index}>{p}</option>)
    };

    findDuplicateHobbies = (users) => {
        const hobby = this.findDuplicate(users, 'hobby');
        return hobby.map((h, index) => <button onClick={() => this.props.filterHobby(h)} key={index}>{h}</button>)
    };

    render() {
        const {users, usersState} = this.props;
        return (
            <Fragment>
                <div className='headers-page'>
                    <form onSubmit={this.handleSubmit} className='form'>
                        <select onChange={this.handleChange}>
                            {this.findDuplicateProfession(usersState)}
                        </select>
                    </form>

                    <div className='filter-btn'>
                        <h3 className='filter-btn-name'>Hobbies:</h3>
                        {this.findDuplicateHobbies(users)}
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

export default connect(mapStateToProps, {filterProfession, filterHobby})(TableContainer);