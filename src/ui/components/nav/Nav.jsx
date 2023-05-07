import React from 'react'
import serch from '../../../assets/u_search-alt.png'
import "./nav.scss"
const Nav = () => {
    return (
        <div>
            <section className='navbar-section'>
                <div className="container">
                    <div className="nav-frame">
                        <div className="logo-serch-frame">
                            <h4>BookMe</h4>
                            <div className="serch-box desk-show">
                              <img src={serch} alt="" />
                            <input type="text" placeholder='Serch Move Name' />
                            </div>
                        </div>

                        <button>Sign In</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Nav;