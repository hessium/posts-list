import React from 'react';
import Form from 'react-bootstrap/Form';

const MySelect = ({options, defaultValue, value, onChange}) => {
        return (
            <Form.Select
                value={value}
                aria-label="Default select example"
                onChange={e => onChange(e.target.value)}
            >
                <option disabled={true} value=''>{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </Form.Select>
        );
}

export default MySelect;

