import React, { useState } from 'react';
import './styles/stureg.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Validate form input and submit form data
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type="email"
          name="mail"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="pass1"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          />
          <input
            type="password"
            name="pass2"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />
          <input
            type="text"
            name="address-line-1"
            placeholder="Address Line 1"
            value={addressLine1}
            onChange={event => setAddressLine1(event.target.value)}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          <label htmlFor="states">State:</label>
          <select
            name="states"
            id="states"
            value={state}
            onChange={event => setState(event.target.value)}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <input
          type="text"
          name="zip-code"
          placeholder="Zip Code"
          value={zipCode}
          onChange={event => setZipCode(event.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Signup;
