import React from 'react';

class EmployeesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        const { employees } = this.props;
        return (
            <React.Fragment>
                <div className="controls">
                    <input
                        onChange={(event) => {
                            this.setState({ text: event.target.value});
                        }}
                        type="text"
                        className="filter-input"
                        data-testid="filter-input"
                    />
                </div>
                <ul className="employees-list">
                    {employees.filter(emp => emp.name.toLowerCase().includes(this.state.text.toLowerCase())).map((employee) => (
                        <li key={employee.name} data-testid="employee">
                            {employee.name}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default EmployeesList;
