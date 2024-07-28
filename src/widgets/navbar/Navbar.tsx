import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.scss'
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation('navbar');

    const tabs = [
        { tab: "main", name: t('main') },
        { tab: "livingRoom", name: t('livingRoom') },
        { tab: "office", name: t('office') },
        { tab: "kitchen", name: t('kitchen') },
        { tab: "bedroom", name: t('bedroom') },
        { tab: "balcony", name: t('balcony') }
    ];    

    const [activeTab, setActiveTab] = useState('main');

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__wrapper">
                    {tabs.map(tab => (
                        <Link
                            key={tab.tab}
                            to={`#${tab.tab}`}
                            className={activeTab === tab.tab ? 'active' : ''}
                            onClick={() => setActiveTab(tab.tab)}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}