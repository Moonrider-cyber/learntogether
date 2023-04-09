import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { getcartcourses, loadUser, removefromcart } from '../../redux/actions/user';
import './cart.scss'
const emptycartimg = require('./asset/empty-shopping-cart-v2.jpg')
import { useDispatch } from 'react-redux';
import { PayPalPayment } from './PayPalPayment';

function Cartcomp() {
   

    let { isAuthenticated,user,cartcourses,message } = useSelector((state) => state.user);
    let { isPaid } = useSelector((state) => state.Payment);
    
    
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(loadUser())
        dispatch(getcartcourses())
        if(user && user.cart.length === 0){
            isAuthenticated = false
        }    
    }, [dispatch,isPaid,message])
    

    const totalprice = cartcourses && cartcourses.cartcourses.reduce((acc,curr) => {
        return acc + curr.price
    },0)

    

    return (
      <>
          
          <section className="section-pagetop" style={{paddingTop:"120px"}}>
            <div className="container">
                <h2 className="title-page">Shopping Cart</h2>
            </div> 
          </section>
          
          {isAuthenticated && user.cart.length > 0 ? (

          <section className="section-content padding-y">
            <div className="container">

            <div className="row gap-5">
          
                <main className="col-md-8 cart-courses">
                    <div className='total-course'>
                        <h6>{user && user.cart.length} Courses in Cart</h6>
                    </div>
                    
                    {cartcourses ? cartcourses.cartcourses.map((data,index) => (

                        <div key={index}>
                            <hr/>
                    <div className="card" >
                        <div className='card-img'>
                            <img src={data.poster[0].url}/>
                        </div>
                        <div className='card-desc'>
                            <div className='cart-desc-title'>
                                <h6>{data.title}</h6>
                            </div>
                            <div className='card-desc-author'>
                                <p>by {data.createBy[0].name}</p>
                            </div>
                            <div className='card-desc-rating'>
                            <i className="fa-solid fa-star"></i>
                                <p>4.9</p>
                                <p>(<span>33</span> reviews)</p>
                            </div>
                        </div>
                        <div className='card-action'>
                            <div className='card-action-btn'>
                            <button onClick={()=> dispatch(removefromcart(data._id))}>Remove</button>
                            {/* <button>Move To Wishlist</button> */}
                            </div>
                        </div>
                        <div className='card-price'>
                            <p>${data.price}</p>
                        </div>
                    </div>
                        </div>
                    )) : null}                    
                    
                </main>

                
                <aside className="col-md-3 cart-aside">
                    <div className='cart-total-title'>
                        <h5>Total:</h5>
                    </div>
                    <div className='cart-total-price'>
                        <p>₹{totalprice}</p>
                    </div>
                    <div className='cart-total-btn'>
                        {/* <button>Checkout</button> */}
                        <PayPalPayment totalprice={totalprice} />
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
                    <Link to={"/"}><button>Keep Shopping</button></Link>
                </div>
            </div>
         )}
          
       
      </>
    );
  }
  
  export default Cartcomp;