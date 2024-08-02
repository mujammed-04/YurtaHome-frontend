import "./navbar.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const tabs = [
    { tab: "main", name: "Главная" },
    { tab: "living-room", name: "Гостиная" },
    { tab: "office", name: "Офис" },
    { tab: "kitchen", name: "Кухня" },
    { tab: "bedroom", name: "Спальня" },
    { tab: "balcony", name: "Балкон" },
  ];

  const [activeTab, setActiveTab] = useState("main");
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__wrapper">
                    {tabs.map(tab => (
                        <Link
                            key={tab.tab}
                            to={tab.tab === 'main' ? '/' : `/${tab.tab}`}
                            // to={tab.tab === 'main' ? '/YurtaHome-frontend' : `/YurtaHome-frontend/${tab.tab}`}
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
