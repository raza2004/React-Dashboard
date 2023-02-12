import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link} from "react-router-dom";
import SideBarItem from './sidebar-item';
import { auth, db, logout } from "../../../src/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import './styles.css';
import logo from '../../assets/images/Logo.png';
import LogoutIcon from '../../assets/icons/logout.svg';

function SideBar ({ menu }) {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    // const fetchUserName = async () => {
    //   try {
    //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //     const doc = await getDocs(q);
    //     const data = doc.docs[0].data();
    //     setName(data.name);
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/admin/login");
        // fetchUserName();
      }, [user, loading]);

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img
                        src={logo}
                        alt="logo" />
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            //  {name}
                            //  {user?.email}
                              className="dashboard__btn" onClick={logout}/>
                             
                             
                        {/* /> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;