import React from 'react';
import '../scss/Nav&footer.scss';

function Navbar(){
    function menuclick(){
        const nav = document.querySelector('.res-nav');
        console.log(nav);
        nav.classList.toggle('res-nav-open');
        nav.classList.toggle('res-nav-close');
    }
    return(
        <div>
            <nav>
                <section className='navbar'>
                    <div className='logo'>
                        <h1>Busilearn</h1>
                        {/* <img src={logo}></img> */}
                    </div>
                    <div className='nav-search'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                        <input type={'text'} placeholder="Search for anyting" />
                    </div>
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
                    <div className='res-nav res-nav-close'>
                        <div className='res-search'>
                            <input type={'text'}/>
                        </div>
                    </div>
            </nav>
        </div>
    );
}
export default Navbar