import p1 from "../photos/weatherapp.png";
import p2 from "../photos/p2.jpg";
import p3 from "../photos/p3.jpg";
import p4 from "../photos/p4.jpg";
import p5 from "../photos/p5.jpg";
import p6 from "../photos/p6.jpg";
// import "../style/style.css"
import "../style/portfolio.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const Portfoliosection=()=>{
    return(
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Projects</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={p1} alt="" />
                    <div className="portfolio-layer">
                        <h4>Weather Checking App</h4>
                        <p id="weather">With this app, you can check the weather of any city in just a few clicks. If the city doesn't exist, the app will let you know with a "City not found!" message. Every time you enter a location, the app calls an API to provide you with the latest weather information. Plus, it features weather-specific images and icons:
                            - 🌧️ Raining? You'll see a raining image and icon.
                            - 🥶 Cold? A cold image and icon will be displayed.
                            - ☀️ Hot? The app shows a hot image and icon.
                            - 🌤️ Otherwise, you'll get a normal weather image.
                        </p>
                        <i><OpenInNewIcon/></i>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={p2} alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima officia, ipsa quidem, iste harum voluptatibus repellendus, assumenda laboriosam tempore magni maiores eaque. Assumenda sapiente velit itaque culpa dolores commodi!</p>
                        <i><OpenInNewIcon/></i>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={p3} alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima officia, ipsa quidem, iste harum voluptatibus repellendus, assumenda laboriosam tempore magni maiores eaque. Assumenda sapiente velit itaque culpa dolores commodi!</p>
                        <i><OpenInNewIcon/></i>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={p4} alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima officia, ipsa quidem, iste harum voluptatibus repellendus, assumenda laboriosam tempore magni maiores eaque. Assumenda sapiente velit itaque culpa dolores commodi!</p>
                        <i><OpenInNewIcon/></i>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src={p5} alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima officia, ipsa quidem, iste harum voluptatibus repellendus, assumenda laboriosam tempore magni maiores eaque. Assumenda sapiente velit itaque culpa dolores commodi!</p>
                        <i><OpenInNewIcon/></i>
                    </div>
                </div>

                <div className="portfolio-box">
                    <img src= {p6} alt="" />
                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae minima officia, ipsa quidem, iste harum voluptatibus repellendus, assumenda laboriosam tempore magni maiores eaque. Assumenda sapiente velit itaque culpa dolores commodi!</p>
                        <i><OpenInNewIcon/></i>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default Portfoliosection;