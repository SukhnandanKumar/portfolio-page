import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import "../style/style.css"
import "../style/footer.css"
const Footersection=()=>{
    return(
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2024 By @sukhnandan | All Rights Reserved</p>
            </div>

            <div className="footer-iconTop">
                <a href="#home"><i><KeyboardArrowUpOutlinedIcon/></i></a>
            </div>
        </footer>
    )
}
export default Footersection;