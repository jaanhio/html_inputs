import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const SignForm = () => {
    return (
        <div>
            <div>
                <h1>General Assembly Account Creation</h1>
                <p>Welcome to the General Assembly. General Assembly is a global
                    institution training people all over the world in today's top
                    technologies.
                </p>
                <p>Please fill out the information below to create your General Assembly
                    account. Let us know what city you're in and what course
                    you're taking. This list is for all students. Please tell us what
                    city you're in and whether you're taking the Immersive User Experience (UX)
                    course or the Immersive Web Development course.
                    </p>
            </div>
            <p className="App-intro">
            </p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <label style={{ marginRight: 45 }}>City:</label>
                <SelectField>
                    <MenuItem primaryText="Hong Kong" />
                    <MenuItem primaryText="London" />
                    <MenuItem primaryText="Los Angeles" />
                    <MenuItem primaryText="New York" />
                    <MenuItem primaryText="Portland" />
                    <MenuItem primaryText="San Francisco" />
                    <MenuItem primaryText="Seattle" />
                    <MenuItem primaryText="Singapore" />
                </SelectField>
            </div>
            {/*<div>
                <label>Course:</label>
                <Checkbox label="UX"/>
                <Checkbox label="Web Dev"/>
        </div>*/}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <label style={{ marginRight: 20 }}>Course:</label>
                <RadioButtonGroup name="course" style={{ display: 'flex', alignItems: 'center' }}>
                    <RadioButton value="UX" label="UX" />
                    <RadioButton value="WD" label="Web Dev" />
                </RadioButtonGroup>
            </div>
            <div style={{ marginBottom: 20 }}>
                <label style={{ marginRight: 29 }}>Name:</label>
                <TextField />
            </div>
            <div style={{ marginBottom: 20 }}>
                <label style={{ marginRight: 33 }}>Email:</label>
                <TextField />
            </div>
            <div style={{ marginBottom: 20 }}>
                <label>Password:</label>
                <TextField />
            </div>
            <div style={{ marginBottom: 20 }}>
                <Checkbox label="Yes, subscribe me to the General Assembly student newsletter" />
            </div>
            <div>
                <Link to="/success">
                    <FlatButton label="Subscribe" />
                </Link>
            </div>
        </div>
    );
}

export default SignForm;