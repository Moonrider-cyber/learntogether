import React from 'react'
import { Link } from 'react-router-dom'

export const CoursesList = ({data}) => {
  return (
    <>
      {/* <Link to={"/course/"+ data._id}> */}
      <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={data && data.poster[0].url}
                    className="w-100" />
                  <div className="hover-overlay">
                      <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                    </div>
                </div>
              </div>
              <div className="col-md-9 col-lg-9 col-xl-7">
                <h5>{data && data.title}</h5>
                <p className="text-truncate mb-5 mb-md-0">
                  {data && data.description}
                </p>
                
                <div className="mt-1 mb-1 text-muted small">
                  <span>{data.createBy[0].name }</span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>{data && data.catagory}</span>
                  <span className="text-primary"> • </span>
                  <span>{data && data.noOfVideos} lectures</span>
                  {/* <span className="text-primary"> • </span>
                  <span>Casual<br /></span> */}
                </div>
                <div className="d-flex flex-row" style={{fontSize:14}}>
                  <div className="mb-0 me-1" style={{color:"rgb(209, 178, 2)",fontSize:13}}>
                    <i className="fa fa-star"></i>
                  </div>
                  <span className='text-danger'>{data && data.rating}</span>
                  <span className='text-danger px-1'>({data && data.reviews.length} reviews)</span>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 py-1" style={{textAlign:"Center"}}>
                <div className="mb-1">
                  <h6 className="mb-1 me-1">${data.price}</h6>
                  {/* <span className="text-danger"><s>$25.99</s></span> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </Link> */}
    </>
  )
}
