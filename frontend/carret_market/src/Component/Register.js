import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
    pwck: '',
  });

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setPasswordMismatch(false); // Reset password mismatch status on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (formData.pw !== formData.pwck) {
      setPasswordMismatch(true);
      return; // Stop further execution
    }

    axios
      .post('http://localhost:8081/api/account/join', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        // Handle success response here
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Handle error response here
        if (error.response) {
          toast.error(JSON.stringify(error.response.data.message)); // 사용자에게 알림 표시
        }
      });
  };

  return (
    <>
        <div className="container" style={{marginTop:'50px'}}>
            <h1>회원가입</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" name="email" placeholder="아이디를 입력하세요" value={formData.email} onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formPw">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" name="pw" placeholder="비밀번호를 입력하세요" value={formData.pw} onChange={handleChange} isInvalid={passwordMismatch}/>
                </Form.Group>

                <Form.Group controlId="formPwck">
                <Form.Label>비밀번호확인</Form.Label>
                <Form.Control type="password" name="pwck" placeholder="비밀번호를 입력하세요" value={formData.pwck} onChange={handleChange} isInvalid={passwordMismatch}/>
                
                </Form.Group>

                <Button variant="primary" type="submit" style={{marginTop:'20px'}}>회원가입</Button>
            </Form>
        </div>
    </>
  );
}


export default Register;