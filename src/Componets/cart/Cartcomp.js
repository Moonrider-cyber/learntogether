import React from 'react'
import { useSelector } from 'react-redux';
import './cart.scss'
const testimg1 = require('../../asset/test1.jpg')
const emptycartimg = require('./asset/empty-shopping-cart-v2.jpg')

function Cartcomp() {

    const { isAuthenticated,user } = useSelector((state) => state.user);

    
    return (
      <>
          
          <section className="section-pagetop" style={{paddingTop:"120px"}}>
            <div className="container">
                <h2 className="title-page">Shopping Cart</h2>
            </div> 
          </section>
          
          {isAuthenticated ? (
          <section className="section-content padding-y">
            <div className="container">

            <div className="row gap-5">
          
                <main className="col-md-8 cart-courses">
                    <div className='total-course'>
                        <h6>{"3"} Courses in Cart</h6>
                    </div>
                    
                    {user ? user.cart.map((course,index) => (
                        <>
                            <hr/>
                    <div className="card" key={index}>
                        <div className='card-img'>
                            <img src={testimg1}/>
                        </div>
                        <div className='card-desc'>
                            <div className='cart-desc-title'>
                                <h6>{user.cart[index].course}</h6>
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
                        </>
                    )) : null}                    
                    
                </main>

                
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
         ) : (
            <div className='empty_cart'>
                <div className='empty_cart_img'>
                    <img src={emptycartimg} />
                </div>
                <div className='empty_cart_text'>
                    <p>Your cart is empty. Keep shopping to find a course!</p>
                </div>
                <div className='empty_cart_btn'>
                    <button>Keep Shopping</button>
                </div>
            </div>
         )}
          
       
      </>
    );
  }
  
  export default Cartcomp;