import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, NavLink } from 'react-bootstrap';

function Marketplace() {
  return (
    <div className='MarketPlaceContainer'>
      <div className="container">
        <h1 style={{textAlign:'center', marginTop:'100px'}}>중고거래 인기매물</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'50px' }}>
          <Card style={{ width: '18rem'  }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'50px' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dnvefa72aowie.cloudfront.net/origin/article/202305/96dfa62e64603f944d1fea8b1d25c2223cd2c26fd61cbb2cbc4be3c011918fb8_0.webp?q=82&s=300x300&t=crop" />
            <Card.Body>
              <Card.Title>공기계 (갤럭시 S20)</Card.Title>
              <Card.Text>10,000원</Card.Text>
              <Card.Text>충북 청주시 흥덕구 가경동</Card.Text>
              <Card.Text>관심 15 ∙ 채팅 50</Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* <h5 style={{textAlign:'center', marginTop:'50px'}}><NavLink exact="true" to="/" activeclassname="active">인기매물 더 보기</NavLink></h5> */}
      </div>
    </div>
  );
}

export default Marketplace;
