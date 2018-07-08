import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './slider';
const Repair=styled.div`
       color: #ffffff;
       font-weight: 700;
       font-size: 24px;
       line-height: 50px;
       span{
       	font-size: 24px;
       	display: block;
       	line-height: 30px;
       	margin-top: 54px;
       }
  `
  const LightText = styled.div`
      color: #ffffff;
       font-weight: 300;
       font-size: 18px;
       line-height: 28px;
  `
  const CallBtn= styled.button`
        with: 230px;
        height: 47px;
        background-color:#ffa14b;
        border-radius: 30px;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        margin-top: 30px;

  `
class Main extends React.Component {
	render(){
		return(
			<Row>
			<Col lg={5}>
			    <Repair>Качественный ремонт
			    <span> iphone за 35 мин и гарантия 1 год</span>
			    </Repair>
			    <LightText>Оставьте заявку на бесплатную диагностику без очереди и
			    получите защитное стекло за 1000 руб в подарок.
			    </LightText>
			    <CallBtn>Отправить заявку!
			    </CallBtn>
			</Col>
			<Col lg={6} lgOffset={1}>
			<Slider/>
			</Col>
			</Row>
		);
	}


}
export default Main