import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
const Repair = styled.div`
      color:#464646;
      font-size:18px;
      font-weight: 300px;
      line-height: 22px;
      `
const WorkTime=styled.div`
      color:#2a2a2a;
      font-size:12px;
      font-weight: 300px;
      line-height: 24px;
      span{
      	display: block;
      	color:#464646;
        font-size:21px;
        font-weight: 600px;
      }
`
const Calls=styled.div`
      color:#2a2a2a;
      font-size:12px;
      font-weight: 300px;
      line-height: 24px;
      span{
      	display: block;
      	color:#464646;
        font-size:21px;
        font-weight: 600px;
      }
`
const CallButton=styled.button`
      with: 178px:
      height:48px;
      background-color: #3Fc7db;
      border-radius: 30px;
      color:#ffffff;
      font-size:14px;
      font-weight: 400px;
      line-height: 22.04px;
      `
class Adress extends React.Component{
	render(){
		return(
			<span> {this.props.addr}
			</span>
		)
	}
}
class TelNumber extends React.Component{
	render(){
		return(
			<span> {this.props.tel}
			</span>
		)
	}
}
class Menu extends React.Component {
	render(){
		return(
			<Row>
			<Col lg={3}>
             <Repair>Ремонт телефонов в сервисном центре
             </Repair>
			</Col>
			<Col lg={3} lgOffset={1}>
            <WorkTime>Пн-пт с 9.00-20.00 сб-вс с 9.00-16.00
            <Adress addr="Ленинская 301"/>
            </WorkTime>
			</Col>
			<Col lg={3}>
			<Calls> Звонки принимаются 24 часа
			<TelNumber tel="8 800 6787879"/>
			</Calls>
			</Col>
			<Col lg={2}>
			<CallButton>Заказать звонок!
			</CallButton>
			</Col>
			</Row>
		)
	}


}
export default Menu