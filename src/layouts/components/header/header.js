
import Account from "~/layouts/components/account";
import LanguageSelector from "../languageSelector/languageSelector";
import './header.scss';

function Header() {
    return ( 
        <header className='header'>
            <div className="container">
                <div className="header_inner">
                    <div className="logo-box header-logo">
                        <a >
                            <img src="assets/images/icons/logo_gannha.svg"  alt="gannha logo" />
                        </a>
                    </div>
                    <div className="header-menu">
                        
                        <ul className="nav nav-list" >
                            
                            <li className="nav-item"><a  > Blog</a></li>
                            <li className="nav-item"><a  >Câu hỏi thường gặp</a></li>
                            <li className="nav-item">
                                <LanguageSelector />
                            </li>
                            <li className="nav-item">
                                <Account />
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </header>

    );
}

export default Header;