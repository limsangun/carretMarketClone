import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8081/api/account/login', formData)
      .then((response) => {
        localStorage.setItem('accessToken', response.headers.access_token);
        localStorage.setItem('refreshToken', response.headers.refresh_token);

        // 리다이렉션 처리
        window.location.href = '/'; // 리다이렉션할 주소 설정
      })
      .catch((error) => {
        // Handle error response here
        if (error.response) {
          console.log(error.response.data.msg);
          toast.error(JSON.stringify(error.response.data.msg)); // 사용자에게 알림 표시
        }
      });
  };

  return (
    <>
        <div className="container" style={{marginTop:'50px'}}>
            <h1>로그인</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" name="email" placeholder="아이디를 입력하세요" value={formData.email} onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" name="password" placeholder="비밀번호를 입력하세요" value={formData.password} onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" style={{marginTop:'20px'}}>로그인</Button>
            </Form>
        </div>
    </>
  );
}


export default Login;