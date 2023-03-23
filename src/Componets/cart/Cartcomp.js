import React from 'react'
import './cart.scss'
const testimg1 = require('../../asset/test1.jpg')
const testimg2 = require('../../asset/test2.jpg')
const testimg3 = require('../../asset/test3.jpg')
const testimg4 = require('../../asset/test4.jpg')

function Cartcomp() {
    return (
      <>
          
          <section class="section-pagetop" style={{paddingTop:"120px"}}>
            <div class="container">
                <h2 class="title-page">Shopping Cart</h2>
            </div> 
          </section>
          
          <section class="section-content padding-y">
            <div class="container">

            <div class="row gap-5">
                {/* <main class="col-md-9">
                    <div class="card">

            <table class="table table-borderless table-shopping-cart">
            <thead class="text-muted">
            <tr class="small text-uppercase">
            <th scope="col">Product</th>
            <th scope="col" width="120">Quantity</th>
            <th scope="col" width="120">Price</th>
            <th scope="col" class="text-right" width="200"> </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <figure class="itemside">
                        <div class="aside"><img src={testimg1} class="img-sm" /></div>
                        <figcaption class="info">
                            <a href="#" class="title text-dark">Some name of item goes here nice</a>
                            <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                        </figcaption>
                    </figure>
                </td>
                <td> 
                    <select class="form-control">
                        <option>1</option>
                        <option>2</option>	
                        <option>3</option>	
                        <option>4</option>	
                    </select> 
                </td>
                <td> 
                    <div class="price-wrap"> 
                        <var class="price">₹1156.00</var> 
                        <small class="text-muted"> ₹315.20 each </small> 
                    </div> 
                </td>
                <td class="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
                <a href="" class="btn btn-light"> Remove</a>
                </td>
            </tr>
            <tr>
                <td>
                    <figure class="itemside">
                        <div class="aside"><img src={testimg2} class="img-sm" /></div>
                        <figcaption class="info">
                            <a href="#" class="title text-dark">Product name  goes here nice</a>
                            <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                        </figcaption>
                    </figure>
                </td>
                <td> 
                    <select class="form-control">
                        <option>1</option>
                        <option>2</option>	
                        <option>3</option>	
                        <option>4</option>	
                    </select> 
                </td>
                <td> 
                    <div class="price-wrap"> 
                        <var class="price">₹149.97</var> 
                        <small  class="text-muted"> ₹75.00 each </small>  
                    </div> 
                </td>
                <td class="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
                <a href="" class="btn btn-light btn-round"> Remove</a>
                </td>
            </tr>
            <tr>
                <td>
                    <figure class="itemside">
                        <div class="aside"><img src={testimg3} class="img-sm" /></div>
                        <figcaption class="info">
                            <a href="#" class="title text-dark">Another name of some product goes just here</a>
                            <p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p>
                        </figcaption>
                    </figure>
                </td>
                <td> 
                    <select class="form-control">
                        <option>1</option>
                        <option>2</option>	
                        <option>3</option>	
                    </select> 
                </td>
                <td> 
                    <div class="price-wrap"> 
                        <var class="price">₹98.00</var> 
                        <small class="text-muted"> ₹578.00 each</small> 
                    </div> 
                </td>
                <td class="text-right"> 
                    <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> 
                    <a href="" class="btn btn-light btn-round"> Remove</a>
                </td>
            </tr>
            </tbody>
            </table>

            <div class="card-body border-top">
                <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
            </div>	
                    </div> 

            <div class="alert alert-success mt-3">
                <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
            </div>

                </main> */}

                <main class="col-md-8 cart-courses">
                    <div className='total-course'>
                        <h6>{"3"} Courses in Cart</h6>
                    </div>
                    <hr/>
                    <div class="card">
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
                    <div class="card">
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
                    <div class="card">
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




                {/* <aside class="col-md-3">
                    <div class="card mb-3">
                        <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label>Have coupon?</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                    <span class="input-group-append"> 
                                        <button class="btn btn-primary">Apply</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        </div> 
                    </div>  
                    <div class="card">
                        <div class="card-body">
                                <dl class="dlist-align">
                                <dt>Total price:</dt>
                                <dd class="text-right">USD 568</dd>
                                </dl>
                                <dl class="dlist-align">
                                <dt>Discount:</dt>
                                <dd class="text-right">USD 658</dd>
                                </dl>
                                <dl class="dlist-align">
                                <dt>Total:</dt>
                                <dd class="text-right  h5"><strong>₹1,650</strong></dd>
                                </dl>
                                <hr />
                                <p class="text-center mb-3">
                                    <img src="assets/images/misc/payments.png" height="26" />
                                </p>

                        </div> 
                    </div>  
                </aside> 
             */}
                
                <aside class="col-md-3 cart-aside">
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