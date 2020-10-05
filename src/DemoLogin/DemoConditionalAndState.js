import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
		/**
		 * isLogin la thuoc tinh cua class
		 * true : da logIn => hien ten nguoi dung
		 * false: hien nut login
		 * 
		 */

		 state = {
			 		isLogin : false,
		 }
		//  isLogin = false;  cach nay sai vi render khong chay lai

    handleLogin = () =>{
			console.log('handleLogin');
			// this.isLogin = true;
			this.setState({
          isLogin : true,
			});
		}


		//Phuong thuc cua class
		renderLogin = () =>{
			if(this.isLogin){
				return <p>Nguyen Phong Hao</p>

			}else{
	      return <button onClick={this.handleLogin}>Login</button>
			}
		}

	//render la phuong thuc cap nhat lai giao dien
	render() {
		  console.log("run render")
			return (
			<div>
					<h2>Conditional And State</h2>
					{this.renderLogin()}
			</div>
		)
	}
}
