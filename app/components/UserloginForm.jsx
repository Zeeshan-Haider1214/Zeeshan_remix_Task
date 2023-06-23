import { Link } from '@remix-run/react';
import {FaUserPlus } from 'react-icons/fa';

function UserloginForm() {

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
         <FaUserPlus/>
      </div>
      <p>
        <label htmlFor="text">Name</label>
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button type='submit'>Sign Up</button>
        <Link to="/signup">Login Now</Link>
      </div>
    </form>
  );
}

export default UserloginForm;
