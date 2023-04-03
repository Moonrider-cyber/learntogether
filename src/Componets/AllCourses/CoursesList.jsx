import React from 'react'
const testimg = require('../../asset/test1.jpg')

export const CoursesList = () => {

  let author = "Musk";
  let totallecure = "10";
  

  return (
    <>
        <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={testimg}
                    className="w-100" />
                  <a href="#">
                    <div className="hover-overlay">
                      <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-9 col-lg-9 col-xl-7">
                <h5>Quant ruybi shirts</h5>
                <p className="text-truncate mb-5 mb-md-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
                
                <div className="mt-1 mb-1 text-muted small">
                  <span>{author}</span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>business</span>
                  <span className="text-primary"> • </span>
                  <span>{totallecure} lectures</span>
                  {/* <span className="text-primary"> • </span>
                  <span>Casual<br /></span> */}
                </div>
                <div className="d-flex flex-row" style={{fontSize:14}}>
                  <div className="mb-0 me-1" style={{color:"rgb(209, 178, 2)",fontSize:13}}>
                    <i className="fa fa-star"></i>
                  </div>
                  <span className='text-danger'>3.3</span>
                  <span className='text-danger px-1'>(30 reviews)</span>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 py-1" style={{textAlign:"Center"}}>
                <div className="mb-1">
                  <h6 className="mb-1 me-1">$17.99</h6>
                  {/* <span className="text-danger"><s>$25.99</s></span> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
