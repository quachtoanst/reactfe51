import React, { Component } from 'react'
import ProductItem from './ProductComponent'

export default class ProductListComponent extends Component {
	render() {
		return (
			<>
			{/* BEGIN LAPTOP */}
			<section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
				<h1 className="text-center">BEST LAPTOP</h1>
				<div className="row">
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
						<ProductItem/>
				</div>
			</section>
			{/* END LAPTOP */}


			</>
		)
	}
}
