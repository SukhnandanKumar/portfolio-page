import Navbar from './Navbar';
import Homesection from './Home';
import Aboutsection from "./About";
import ServiceSection from "./Service";
import Portfoliosection from "./Portfolio";
import Contactsection from "./Contact";
import Sertificationsection from './Sertificate';
import Footersection from "./Footer";
const Allcomponent=()=>{
    return(<>
        <Navbar/>
        <Homesection/>
        <Aboutsection/>
        <ServiceSection/>
        <Portfoliosection/>
        <Sertificationsection/>
        <Contactsection/>
        <Footersection/>
    </>)
}
export default Allcomponent;