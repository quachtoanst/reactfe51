//state lesss component la component function (react function component)

//* cu phap tao rfc => enter
import React from 'react'

export default function DemoStateless() {
	//Ben trong len renturn cua function component la noi dung giao ien cua the nay. Luu y noi dung component phai duoc bao phu boi 1 the bat ky
	return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#!" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
