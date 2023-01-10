import React from 'react';
import './Navbar.scss';

function Navbar(){
    function menuclick(){
        const navbar = document.querySelector('.navbar');
        const nav = document.querySelector('.res-nav');

        navbar.classList.toggle('resnavbaropen');
        navbar.classList.toggle('resnavbarclose');
        nav.classList.toggle('res-nav-open');
        nav.classList.toggle('res-nav-close');
    }
    return(
        <div>
            <nav>
                <header className='navbar resnavbarclose'>
                    <section className='navbar-right'>
                    <div className='logo'>
                        <h1>Busilearn</h1>
                    </div>
                    <div className='nav-menu-wapper'>
                        <button type="button" className='nav-menu-title'><span>Categories</span></button>
                                <div className='catagory-menu'>
                                    <ul>
                                        <li><button><span>Entrepreneurship</span><i className="fa-solid fa-angle-right"></i></button></li>
                                        <li><button><span>Communication</span><i className="fa-solid fa-angle-right"></i></button></li>
                                        <li><button><span>Sales</span><i className="fa-solid fa-angle-right"></i></button></li>
                                        <li><button><span>Project Management</span><i className="fa-solid fa-angle-right"></i></button></li>
                                        <li><button><span>E-Commerce</span><i className="fa-solid fa-angle-right"></i></button></li>
                                    </ul>
                                </div>
                    </div>
                    <div className='nav-search'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                        <input type={'text'} placeholder="Search for anyting" />
                    </div>
                    </section>
                    <section className='navbar-left'>
                        <div className='nav-links'>
                            <ul>
                                <li><a href='#'>Teach with us</a></li>
                                <li><i className="fa-solid fa-cart-shopping"></i></li>
                                <li><button>Sign Up</button></li>
                            </ul>
                        </div>
                        <div className='res-nav-btn' onClick={menuclick}>
                            <i className="fa-solid fa-bars" id='nav-bars'></i>
                            <i className="fa-solid fa-xmark" id='nav-xmark'></i>
                        </div>
                    </section>
                </header>
                    <div className='res-nav res-nav-close'>
                        <div className='res-search'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type={'text'} placeholder="Search anything"/>
                        </div>
                        <div className='res-links'>
                            
                        </div>
                    </div>
            </nav>
        </div>
    );
}
export default Navbar