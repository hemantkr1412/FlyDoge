
import "./hero.css";
import { motion } from "framer-motion";
const Hero = ({ dogeData }) => {
    return (
        <div className="herosectionMain">
            <div className="herosectionTop">
                <div className="herosectionTopSubdiv1">

                    <motion.div
                        initial={{ x: "-100vw" }} // Start off-screen to the left
                        animate={{ x: 0 }} // Move to original position
                        transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring animation
                    // Keep it fixed while moving
                    >
                        <img src="/fdogeHeroSectionBG.png" />
                    </motion.div>
                </div>
                <div className="herosectionTopSubdiv2">
                    <div class="container">
                        <div class="title">FlyDoge</div>
                        <div class="subtitle">Unleashing Goodness with FlyDoge!</div>
                        <p class="description">
                            The Memecoin with a Mission! Together, we’re rescuing animals, planting
                            trees, and uplifting communities. Join the FlyDoge pack on Solana and
                            make a difference while you earn!
                        </p>
                        {/* <div class="info-container">
                            <div class="info-box">
                                <div class="info-title">Price</div>
                                <div class="info-value">${dogeData.price_in_usdt}</div>
                            </div>
                            <div class="info-box">
                                <div class="info-title">Market Cap</div>
                                <div class="info-value">${dogeData.market_cap}</div>
                            </div>
                            <div class="info-box">
                                <div class="info-title">Tokens Burned</div>
                                <div class="info-value">{dogeData.curr_tokens_burnt}</div>
                            </div>
                        </div> */}
                        {/* <div class="info-containerMobile">
                            <div style={{
                                width: "100%"
                            }}>
                                <div class="info-box">
                                    <div class="info-title">Price</div>
                                    <div class="info-value">${dogeData.price_in_usdt}</div>
                                </div>
                            </div>
                            <div style={{
                                width: "100%",
                                display: "flex",
                                gap: "1rem",
                                marginTop: "1rem"
                            }}>
                                <div class="info-box">
                                    <div class="info-title">Market Cap</div>
                                    <div class="info-value">${dogeData.market_cap}</div>
                                </div>
                                <div class="info-box">
                                    <div class="info-title">Tokens Burned</div>
                                    <div class="info-value">{dogeData.curr_tokens_burnt}</div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
            <div className="herosectionabout">

                <div className='herosectionaboutSubdiv'>
                    <div class="about">
                        ABOUT
                    </div>


                    <p className="aboutParaGraph">
                        AtFlyDoge, we believe that a meme can be more than just fun—it can fuel change.
                        Powered by the AirDAO network,FlyDoge is a community-driven memecoin with a
                        purpose. Our mission goes beyond the blockchain: we’re committed to protecting
                        animals, nurturing the environment, and empowering the underprivileged.
                        <br />
                        {/* <br /> */}
                        Every token you hold contributes to social good, from rescuing animals to
                        planting trees and supporting children and women in need.FlyDoge isn’t just a
                        memecoin; it’s a movement for a better world, where crypto meets compassion.
                    </p>
                    <p className="join-message joinus-desktop">
                        Join us today, and together, let&#39;s bark for a better tomorrow!
                    </p>
                </div>
                <div className="herosectionaboutSubdiv2">
                    <div className="joinus-mobile">
                        <p className="join-message">
                            Join us today, and together, let&#39;s bark for a better tomorrow!
                        </p>
                    </div>
                    <img
                        // id='C2I'
                        src={"20.png"}
                        alt='C2 Image'
                        style={{
                            borderRadius: "50%"
                        }}
                    />
                </div>
            </div>
        </div>)
}

export default Hero;