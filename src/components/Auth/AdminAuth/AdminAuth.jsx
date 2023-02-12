import React from 'react';
import { useState,useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './AdminAuth.css'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
function AdminAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;}
      if (user) navigate("/admin/Dashboard");
    }, [user, loading]);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        
        <div className='log-box'>
        <h3>Admin Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email:<br></br></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br></br>
        </Form.Group>
        <Form.Group size="md" controlId="password">
          <Form.Label>Password:<br></br></Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default AdminAuth;