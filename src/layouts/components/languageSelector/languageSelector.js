import React from 'react';
import HeadlessTippy from '@tippyjs/react';

import { useEffect, useState } from 'react';
import "./languageSelector.scss";
function LanguageSelector() {
    

    const languageList = [
        {
            value: 'vn',
            title: 'Tiếng Việt',
            flag: '../assets/images/language-flag/vi.png',
        },
        {
            value: 'en',
            title: 'English',
            flag: '../assets/images/language-flag/en.png',
        },
    ];

    const [selectedLanguage, setLanguage] = useState(languageList[0]);

    const [visible, setVisible] = useState(false);

    const handleLanguageSelect = (languageItem) =>{
        console.log(languageItem)
    }
    const hide = ()=>{
        console.log('hide');
        setVisible(false);
    }

    const toggerLanguageSelecter = ()=>{
        !visible ? setVisible(true) : setVisible(false);
    }

    const renderLanguage = (attrs) => (
        <ul className='language-list'>
            {languageList.map((languageItem, index) => {
                return <li className='language-item' key={index} onClick={() => handleLanguageSelect(languageItem)}>
                    <span className='icon'>
                        <img src={languageItem.flag} alt={languageItem.title}/>
                    </span>
                    <span >{languageItem.title}</span>
                </li>;
            })}
        </ul>
    );

    console.log(visible)

    return (
        <div className='language-selector-container'>
            <HeadlessTippy
            interactive  
            visible={visible}
            offset={[-20, 20]}
            placement="bottom"
            onClickOutside={hide}
            render={renderLanguage}
            
            >
            <div className="language-selector" 
            onClick={toggerLanguageSelecter}>
                <div className="selected-language">
                    <img src={selectedLanguage.flag} alt={selectedLanguage.title} />
                </div>
                <div className="icon">
                    <img src='../assets/images/icons/down-arrow.png' alt="arrow" />
                </div>
            </div>
        </HeadlessTippy>
        </div>
    
    );
}

export default LanguageSelector;
