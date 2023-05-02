import React from 'react';
import PropTypes from 'prop-types'


class SelectInput extends React.Component {
    render() {
        const {age, handleChange} = this.props;

        return (
            <label htmlFor='age'> 
                Idade:
                <select
                    id='age'
                    name='age'
                    onChange={handleChange}
                    value={age}
                >
                    <option value=''>Selecionar</option>
                    <option value='adult'>Maior que 18</option>
                    <option value='underage'>Menor que 18</option>
                </select>
            </label>
        );
    }
}

SelectInput.protoTypes = {
    age: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}




export default SelectInput;
