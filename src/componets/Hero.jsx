
import "./hero.css";
const Hero = () =>{
    return(
    <div className="herosectionMain">
        <div className="herosectionTop">
            <div className="herosectionTopSubdiv1">
                <img src="/src/assets/herosectionImage.svg" />
            </div>
            <div className="herosectionTopSubdiv2">
            <div class="container">
                <div class="title">AirDoge</div>
                <div class="subtitle">Unleashing Goodness with AirDoge!</div>
                <p class="description">
                    The Memecoin with a Mission! Together, we’re rescuing animals, planting
                    trees, and uplifting communities. Join the AirDoge pack on AirDAO and
                    make a difference while you earn!
                </p>
                <div class="info-container">
                    <div class="info-box">
                    <div class="info-title">Price</div>
                    <div class="info-value">$0.0188</div>
                    </div>
                    <div class="info-box">
                    <div class="info-title">Market Cap</div>
                    <div class="info-value">$100M</div>
                    </div>
                    <div class="info-box">
                    <div class="info-title">Tokens Burned</div>
                    <div class="info-value">45M</div>
                    </div>
                </div>
            </div>

           </div>
        </div>
        <div className="herosectionabout">
           
                <div className='herosectionaboutSubdiv'>
                    <div className="lg:self-start [text-shadow:5px_8px_4px_#2d2d7280] [-webkit-text-stroke:4px_#1f1f67] [font-family:'Peralta',Helvetica] font-normal text-[#ffbc6c] text-[80px] text-center tracking-[0] leading-[89.6px] whitespace-nowrap [-webkit-line-clamp:1] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                    ABOUT
                    </div>

                    <p className="aboutParaGraph">
                    At AirDoge, we believe that a meme can be more than just fun—it can fuel change.
                    Powered by the AirDAO network, AirDoge is a community-driven memecoin with a
                    purpose. Our mission goes beyond the blockchain: we’re committed to protecting
                    animals, nurturing the environment, and empowering the underprivileged.
                    <br />
                    <br />
                    Every token you hold contributes to social good, from rescuing animals to
                    planting trees and supporting children and women in need. AirDoge isn’t just a
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
                    src={"/src/assets/aboutdog.svg"}
                    alt='C2 Image'
                />
                </div>
        </div>
    </div>)
}

export default Hero;