// import "../style/style.css"
import "../style/services.css"
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import AndroidIcon from '@mui/icons-material/Android';
const ServiceSection=()=>{
    return(
        <section className="services" id="services">
            <h2 className="headinng">My <span>Services</span></h2>

            <div className="services-container">
                <div className="services-box">
                    <CodeIcon className="icon"/>
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, minima? Veniam mollitia asperiores officia minima iusto id deleniti maxime libero iure ea, temporibus placeat sed atque magnam voluptatem animi. Ab?</p>
                    <a href="#" className="btn">Read more</a>
                </div>

                <div className="services-box">
                    <PaletteIcon className="icon"/>
                    <h3>UI/UX Designer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, minima? Veniam mollitia asperiores officia minima iusto id deleniti maxime libero iure ea, temporibus placeat sed atque magnam voluptatem animi. Ab?</p>
                    <a href="#" className="btn">Read more</a>
                </div>

                <div className="services-box">
                    <AndroidIcon className="icon"/>
                    <h3> Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, minima? Veniam mollitia asperiores officia minima iusto id deleniti maxime libero iure ea, temporibus placeat sed atque magnam voluptatem animi. Ab?</p>
                    <a href="#" className="btn">Read more</a>
                </div>

            </div>
        </section>
    )
}
export default ServiceSection;