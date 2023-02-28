import React from "react";
import Card from "./cards/card";
// import SimpleSlider from "./slider/slider";

const Home = () => {
    return (
        <div className="home-page_container">
            <div className="top-advs">
                <div className="text_adv" >
                    <img className="thuder_img" src="/images/thunder.png" alt="thunder" loading="lazy" />  SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY <strong>$1/MONTH</strong>
                </div>
                <div className="text_adv" >
                    <img className="thuder_img" src="/images/thunder.png" alt="thunder" loading="lazy" /> SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY <strong>$1/MONTH</strong>
                </div>
                <div className="text_adv" >
                    <img className="thuder_img" src="/images/thunder.png" alt="thunder" loading="lazy" /> SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY <strong>$1/MONTH</strong>
                </div>
                <div className="text_adv" >
                    <img className="thuder_img" src="/images/thunder.png" alt="thunder" loading="lazy" /> SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY <strong>$1/MONTH</strong>
                </div>
                <div className="text_adv" >
                    <img className="thuder_img" src="/images/thunder.png" alt="thunder" loading="lazy" /> SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY <strong>$1/MONTH</strong>
                </div>
            </div>
            <div className="header">
                <div className="header_content">
                    <img className="logo-image" src="/images/logo.png" alt="logo" loading="lazy" />
                    <div className="left_contant">
                        <p className="tip">FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE</p>
                        <div className="small_menu">
                            <div className="shopping-cart">
                                <img className="cart-icon" src="/images/cart.png" alt="cart-icon" loading="lazy" />
                                <span>Shopping Cart</span>
                                <div className="cart-number">0</div>
                            </div>
                            <div className="wish-list">
                                <img className="heart-icon" src="/images/heart.png" alt="heart-icon" loading="lazy" />
                                My Wish Lists
                            </div>
                            <div className="signin-signup">Sign In or Create an account</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="menu-content">
                    <div className="btn">NEW IN</div>
                    <div className="btn">TREND</div>
                    <div className="btn">COLLECTIONS</div>
                    <div className="btn">LOOKBOOK</div>
                    <div className="btn">DEMO</div>
                    <div className="btn">SHOP INSTAGRAM</div>
                    <div className="btn">BLOG</div>
                    <div className="btn">BRANDS</div>
                    <div className="btn">FAQS</div>
                </div>
            </div>
            <div className="casual">
                <img className="main-img" src="/images/main-img.png" alt="main" loading="lazy" />
                <div className="change-img">
                    <div className="name-img">
                        COSMOPOLIS
                    </div>
                    <div className="line"></div>
                    <div className="small_tip">
                        Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous
                    </div>
                    <div className="cennter_div">
                        <button className="btn_shop">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
            <div className="product_list">
                <div className="products_container">
                    <div className="top_caterogy">
                        <div className="cate_container">
                            <span className="cate_name">EDITOR'S PICK</span>
                            <img className="cate_img" src="/images/editor.png" alt="" loading="lazy" />
                        </div>
                        <div className="cate_container">
                            <span className="cate_name">SHOES</span>
                            <img className="cate_img" src="/images/shoes.png" alt="" loading="lazy" />
                        </div>
                        <div className="cate_container">
                            <span className="cate_name">ACCESSORIES</span>
                            <img className="cate_img" src="/images/acc.png" alt="" loading="lazy" />
                        </div>
                    </div>
                    <div className="bottom_container"></div>
                    <div className="arrivals_container">
                        <div className="line"></div>
                        <div className="arrivals_box">
                            <p className="top_content">NEW ARRIVALS</p>
                            <p className="all_btn">View All</p>
                        </div>
                        <div className="line"></div>
                    </div>
                    <div className="lists">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="show_more_container">
                        <button className="show_more_btn">SHOW MORE</button>
                    </div>
                </div>
            </div>
            <div className="slider_container">
                <div className="slider_content">
                    <div className="top_info">
                        <div className="insta"><img className="insta_icon" src="/images/insta.png" alt="instagram icon" loading="lazy" /> #ELLA ON INSTAGRAM</div>
                        <p className="small_tip">Phasellus lorem malesuada ligula pulvinar commodo maecenas</p>
                    </div>
                </div>
                <div className="slider_box">
                    {/* <img className="prev_btn" src="/images/prev.png" alt="" loading="lazy" /> */}
                    <img className="gallery" src="/images/01.png" alt="gallery" loading="lazy"/>
                    <img className="gallery" src="/images/02.png" alt="gallery" loading="lazy"/>
                    <img className="gallery" src="/images/03.png" alt="gallery" loading="lazy"/>
                    <img className="gallery" src="/images/04.png" alt="gallery" loading="lazy"/>
                    <img className="gallery" src="/images/05.png" alt="gallery" loading="lazy"/>
                    <img className="gallery" src="/images/01.png" alt="gallery" loading="lazy"/>
                    <img className="gallery" src="/images/02.png" alt="gallery" loading="lazy"/>
                    {/* <img className="next_btn" src="/images/next.png" alt="" loading="lazy" /> */}
                </div>
                <div className="view_btn_container">
                    <button className="view_btn">VIEW GALLERY</button>
                </div>
            </div>
            <div className="footer_container">
                <div className="footer_content">
                    <div className="top_info">
                        <div className="info">
                            <div className="title">
                                SHOP
                            </div>
                            <li className="link">New In</li>
                            <li className="link">Women</li>
                            <li className="link">Men</li>
                            <li className="link">Shoes</li>
                            <li className="link">Bags & Accessories</li>
                            <li className="link">Top Brands</li>
                            <li className="link">Sale & Speacial Offers</li>
                            <li className="link">Lookbook</li>
                        </div>
                        <div className="info">
                            <div className="title">
                                INFOMATION
                            </div>
                            <li className="link">About</li>
                            <li className="link">Customer Service</li>
                            <li className="link">Reward Program</li>
                            <li className="link">Shipping & Returns</li>
                            <li className="link">Privacy Policy</li>
                            <li className="link">Terms & Conditions</li>
                            <li className="link">Blog</li>
                        </div>
                        <div className="info">
                            <div className="title">
                                CUSTOMER SERVICE
                            </div>
                            <li className="link">Search Terms</li>
                            <li className="link">Advanced Search</li>
                            <li className="link">Orders and Returns</li>
                            <li className="link">Contact Us</li>
                            <li className="link">Theme FAQs</li>
                            <li className="link">Consultant</li>
                            <li className="link">Store Locations</li>
                        </div>
                        <div className="info">
                            <div className="title">
                                NEWSLETTER SIGN UP
                            </div>
                            <li className="link">Sign up for exclusive updates, new arrivals & insider only discounts</li>
                            <div className="input_box">
                                <input className="search_input" type="text" placeholder="Email Address"/>
                                <button className="submit">SUBMIT</button>
                            </div>
                            <div className="social_links">
                                <img className="social_name" src="/images/facebook.png" alt="facebook" loading="lazy" />
                                <img className="social_name" src="/images/twitter.png" alt="twitter" loading="lazy" />
                                <img className="social_name" src="/images/instagram.png" alt="instagram" loading="lazy" />
                                <img className="social_name" src="/images/pinterest.png" alt="prin" loading="lazy" />
                                <img className="social_name" src="/images/snapchat.png" alt="snapchat" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom_info">
                        <div className="left_info">
                            <p className="top_date">@2014 Ella Demo. All Right Reserved. Powered by Shopify</p>
                            <p className="bottom_text">Shopify Themes by HaloThemes.com</p>
                        </div>
                        <div className="right_images">
                            <img className="bank" src="/images/0.png" alt="bank icon" loading="lazy"/>
                            <img className="bank" src="/images/1.png" alt="bank icon" loading="lazy"/>
                            <img className="bank" src="/images/2.png" alt="bank icon" loading="lazy"/>
                            <img className="bank" src="/images/3.png" alt="bank icon" loading="lazy"/>
                            <img className="bank" src="/images/4.png" alt="bank icon" loading="lazy"/>
                            <img className="bank" src="/images/5.png" alt="bank icon" loading="lazy"/>
                            <img className="bank" src="/images/6.png" alt="bank icon" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home;