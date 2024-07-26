import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation('navbar');

    const tabs = [
        { tab: 'main', name: t('main') },
        { tab: 'events', name: t('events') },
        { tab: 'hobby', name: t('hobby') },
        { tab: 'homeRestaurant', name: t('homeRestaurant') },
        { tab: 'interiorOfTheDay', name: t('interiorOfTheDay') },
        { tab: 'gallery', name: t('gallery') },
        { tab: 'collection', name: t('collection') },
        { tab: 'homeGarden', name: t('homeGarden') },
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