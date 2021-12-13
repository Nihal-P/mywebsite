import './Sidebar.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Sidebar = () => {
    return ( 
        <div id="sidenav">
            <a href="#intro" className="sidelinks">/home</a>
            <a href="#about" className="sidelinks">/about</a>
            <a href="#experience" className="sidelinks">/experience</a>
            <a href="#projects" className="sidelinks">/software-creations</a>

            <div className="sidebarlogos">
                <a href="mailto:nihalpatelwork@gmail.com"><EmailRoundedIcon style={{fontSize:22}} className="sidelogo"></EmailRoundedIcon></a>
                <a href="https://github.com/Nihal-P" target="_blank" rel="noreferrer"><GitHubIcon style={{fontSize:20}} className="sidelogo"></GitHubIcon></a>
                <a href="https://www.linkedin.com/in/nihal-patel/" target="_blank" rel="noreferrer"><LinkedInIcon style={{fontSize:22}} className="sidelogo"></LinkedInIcon></a>
            </div>    
        </div>
     );
}
 
export default Sidebar;
