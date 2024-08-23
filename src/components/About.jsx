import  aboutpic  from "../photos/profileAbout.png"; 
// import "../style/style.css"
import "../style/about.css"
const Aboutsection=()=>{
    return(
        // !--ABOUT SECTION DESIGN --!
        <section className="about" id="about">
            <div className="about-img">
                <img src={aboutpic} alt="AIMG" />
            </div>

            <div className="about-content">
                <h2 className="heading">ABOUT</h2>
                <h3>Frontend Developer</h3>
                <p>My name is Sukhnandan Kumar. I am a versatile developer skilled in both backend and frontend development. I have a strong foundation in the MERN stack and have completed my Bachelor of Computer Application from CIMAGE College in Patna, affiliated with Patliputra University. My technical expertise includes working with technologies such as React, JavaScript, MongoDB, Express, SQL, Node.js, HTML, CSS, Tailwind, and Bootstrap. I have a keen interest in building dynamic web applications and have already created a weather checking app that integrates various technologies to provide real-time weather information. As a dedicated and passionate developer, I am continuously striving to enhance my skills and contribute to impactful projects. My journey in the tech world is driven by curiosity and a commitment to innovation. I hail from Sitamarhi, Bihar, and bring with me the values of perseverance and hard work from my hometown. I am excited about the opportunities ahead and look forward to making significant contributions to the tech community.</p>
                <a href="#" className="btn">Read more</a>
            </div>
        </section>
    )
}
export default Aboutsection;