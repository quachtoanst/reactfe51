import React, { Component } from 'react'
import Header from './HeaderComponent'
import Carousel from './SliderComponent'
import Footer from './FooterComponent'
import ProductList from './ProductListComponent'


export default class BaiTapLayout1 extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Carousel/>
				<ProductList/>
				<Footer/>
			</div>
		)
	}
}
