import React from 'react'
import './cart.scss'
const testimg1 = require('../../asset/test1.jpg')
const testimg2 = require('../../asset/test2.jpg')
const testimg3 = require('../../asset/test3.jpg')
const testimg4 = require('../../asset/test4.jpg')

function Cartcomp() {
    return (
      <>
          
          <section className="section-pagetop" style={{paddingTop:"120px"}}>
            <div className="container">
                <h2 className="title-page">Shopping Cart</h2>
            </div> 
          </section>
          
          <section className="section-content padding-y">
            <div className="container">

            <div className="row gap-5">
                {/* <main className="col-md-9">
                    <div className="card">

            <table className="table table-borderless table-shopping-cart">
            <thead className="text-muted">
            <tr className="small text-uppercase">
            <th scope="col">Product</th>
            <th scope="col" width="120">Quantity</th>
            <th scope="col" width="120">Price</th>
            <th scope="col" className="text-right" width="200"> </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <figure className="itemside">
                        <div className="aside"><img src={testimg1} className="img-sm" /></div>
                        <figcaption className="info">
                            <a href="#" className="title text-dark">Some name of item goes here nice</a>
                            <p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                        </figcaption>
                    </figure>
                </td>
                <td> 
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>	
                        <option>3</option>	
                        <option>4</option>	
                    </select> 
                </td>
                <td> 
                    <div className="price-wrap"> 
                        <var className="price">₹1156.00</var> 
                        <small className="text-muted"> ₹315.20 each </small> 
                    </div> 
                </td>
                <td className="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
                <a href="" className="btn btn-light"> Remove</a>
                </td>
            </tr>
            <tr>
                <td>
                    <figure className="itemside">
                        <div className="aside"><img src={testimg2} className="img-sm" /></div>
                        <figcaption className="info">
                            <a href="#" className="title text-dark">Product name  goes here nice</a>
                            <p className="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                        </figcaption>
                    </figure>
                </td>
                <td> 
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>	
                        <option>3</option>	
                        <option>4</option>	
                    </select> 
                </td>
                <td> 
                    <div className="price-wrap"> 
                        <var className="price">₹149.97</var> 
                        <small  className="text-muted"> ₹75.00 each </small>  
                    </div> 
                </td>
                <td className="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
                <a href="" className="btn btn-light btn-round"> Remove</a>
                </td>
            </tr>
            <tr>
                <td>
                    <figure className="itemside">
                        <div className="aside"><img src={testimg3} className="img-sm" /></div>
                        <figcaption className="info">
                            <a href="#" className="title text-dark">Another name of some product goes just here</a>
                            <p className="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                        </figcaption>
                    </figure>
                </td>
                <td> 
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>	
                        <option>3</option>	
                    </select> 
                </td>
                <td> 
                    <div className="price-wrap"> 
                        <var className="price">₹98.00</var> 
                        <small className="text-muted"> ₹578.00 each</small> 
                    </div> 
                </td>
                <td className="text-right"> 
                    <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light mr-2" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> 
                    <a href="" className="btn btn-light btn-round"> Remove</a>
                </td>
            </tr>
            </tbody>
            </table>

            <div className="card-body border-top">
                <a href="#" className="btn btn-primary float-md-right"> Make Purchase <i className="fa fa-chevron-right"></i> </a>
                <a href="#" className="btn btn-light"> <i className="fa fa-chevron-left"></i> Continue shopping </a>
            </div>	
                    </div> 

            <div className="alert alert-success mt-3">
                <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
            </div>

                </main> */}

                <main className="col-md-8 cart-courses">
                    <div className='total-course'>
                        <h6>{"3"} Courses in Cart</h6>
                    </div>
                    <hr/>
                    <div className="card">
                        <div className='card-img'>
                            <img src={testimg1}/>
                        </div>
                        <div className='card-desc'>
                            <div className='cart-desc-title'>
                                <h6>{"Some name of item goes here nice"}</h6>
                            </div>
                            <div className='card-desc-author'>
                                <p>by{"John Doe"}</p>
                            </div>
                            <div className='card-desc-rating'>
                            <i className="fa-solid fa-star"></i>
                                <p>4.9</p>
                                <p>(<span>33</span> reviews)</p>
                            </div>
                        </div>
                        <div className='card-action'>
                            <div className='card-action-btn'>
                            <button>Remove</button>
                            <button>Move To Wishlist</button>
                            </div>
                        </div>
                        <div className='card-price'>
                            <p>{"₹1156.00"}</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="card">
                        <div className='card-img'>
                            <img src={testimg1}/>
                        </div>
                        <div className='card-desc'>
                            <div className='cart-desc-title'>
                                <h6>{"Some name of item goes here nice"}</h6>
                            </div>
                            <div className='card-desc-author'>
                                <p>by{"John Doe"}</p>
                            </div>
                            <div className='card-desc-rating'>
                            <i className="fa-solid fa-star"></i>
                                <p>4.9</p>
                                <p>(<span>33</span> reviews)</p>
                            </div>
                        </div>
                        <div className='card-action'>
                            <div className='card-action-btn'>
                            <button>Remove</button>
                            <button>Move To Wishlist</button>
                            </div>
                        </div>
                        <div className='card-price'>
                            <p>{"₹1156.00"}</p>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="card">
                        <div className='card-img'>
                            <img src={testimg1}/>
                        </div>
                        <div className='card-desc'>
                            <div className='cart-desc-title'>
                                <h6>{"Some name of item goes here nice"}</h6>
                            </div>
                            <div className='card-desc-author'>
                                <p>by{"John Doe"}</p>
                            </div>
                            <div className='card-desc-rating'>
                            <i className="fa-solid fa-star"></i>
                                <p>4.9</p>
                                <p>(<span>33</span> reviews)</p>
                            </div>
                        </div>
                        <div className='card-action'>
                            <div className='card-action-btn'>
                            <button>Remove</button>
                            <button>Move To Wishlist</button>
                            </div>
                        </div>
                        <div className='card-price'>
                            <p>{"₹1156.00"}</p>
                        </div>
                    </div>
                </main>




                {/* <aside className="col-md-3">
                    <div className="card mb-3">
                        <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Have coupon?</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" name="" placeholder="Coupon code" />
                                    <span className="input-group-append"> 
                                        <button className="btn btn-primary">Apply</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        </div> 
                    </div>  
                    <div className="card">
                        <div className="card-body">
                                <dl className="dlist-align">
                                <dt>Total price:</dt>
                                <dd className="text-right">USD 568</dd>
                                </dl>
                                <dl className="dlist-align">
                                <dt>Discount:</dt>
                                <dd className="text-right">USD 658</dd>
                                </dl>
                                <dl className="dlist-align">
                                <dt>Total:</dt>
                                <dd className="text-right  h5"><strong>₹1,650</strong></dd>
                                </dl>
                                <hr />
                                <p className="text-center mb-3">
                                    <img src="assets/images/misc/payments.png" height="26" />
                                </p>

                        </div> 
                    </div>  
                </aside> 
             */}
                
                <aside className="col-md-3 cart-aside">
                    <div className='cart-total-title'>
                        <h5>Total:</h5>
                    </div>
                    <div className='cart-total-price'>
                        <p>₹1156.00</p>
                    </div>
                    <div className='cart-total-btn'>
                        <button>Checkout</button>
                    </div>

                </aside>
            
            </div>

            </div> 
          </section>
         
          
       
      </>
    );
  }
  
  export default Cartcomp;