import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 로그인 처리 로직을 추가하세요
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
        <div className="container" style={{marginTop:'50px'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" placeholder="아이디를 입력하세요" value={username} onChange={handleUsernameChange}/>
                </Form.Group>

                <Form.Group controlId="formPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={handlePasswordChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" style={{marginTop:'20px'}}>로그인</Button>
            </Form>
        </div>
    </>
  );
}


export default Login;