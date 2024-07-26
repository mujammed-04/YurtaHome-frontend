import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const tabs = [
    { tab: 'main', name: 'Главная' },
    { tab: 'events', name: 'Событие' },
    { tab: 'hobby', name: 'Хобби' },
    { tab: 'homeRestaurant', name: 'Домашний ресторан' },
    { tab: 'interiorOfTheDay', name: 'Интерьер дня' },
    { tab: 'gallery', name: 'Галерея' },
    { tab: 'collection', name: 'Коллекция' },
    { tab: 'homeGarden', name: 'Домашний сад' }
];

export default function Navbar() {
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