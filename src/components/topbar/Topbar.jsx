import { Link } from "react-router-dom";
import './topbar.css'
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT"});
    };

    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-telegram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                { 
                    user ? (
                    <Link to="/settings">
                        <img className="topImg"
                            src={PF + user.profilePic}
                            alt=""
                        />
                    </Link>
                    
                ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/register">
                                    REGISTER
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                            </Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}
