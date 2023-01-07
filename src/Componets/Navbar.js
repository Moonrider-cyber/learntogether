import React from 'react';
import '../scss/Nav&footer.scss';

function Navbar(){
    function menuclick(){
        const navbar = document.querySelector('.navbar');
        const nav = document.querySelector('.res-nav');

        navbar.classList.toggle('navbaropen');
        nav.classList.toggle('res-nav-open');
        nav.classList.toggle('res-nav-close');
    }
    // function navcatagory(){
    //     const catmenu = document.querySelector('.catagory-menu');
    //     // catagorytitle.addEventListener('focus',()=>{
    //     //     console.log('yoo');
    //     // })
    //     console.log('outside');
    //     catmenu.classList.toggle('catagory-menu-open')

    // }
    return(
        <div>
            <nav>
                <header className='navbar'>
                    <section className='navbar-right'>
                    <div className='logo'>
                        <h1>Busilearn</h1>
                        {/* <img src={logo}></img> */}
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
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    </section>
                </header>
                    <div className='res-nav res-nav-close'>
                        <div className='res-search'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type={'text'} placeholder="Search anything"/>
                        </div>
                    </div>
            </nav>
        </div>
    );
}
export default Navbar