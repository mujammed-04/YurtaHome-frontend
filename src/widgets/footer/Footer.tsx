import { Link } from 'react-router-dom';
import { LogoBig, Telegram, Twitter, Vk } from '../../shared/icons';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer-section">
            <img src={LogoBig} alt="Yurta Home Logo" className="footer-logo" />
            <div className="footer-social">
              <Link to="">
                {' '}
                <img src={Vk} alt="VK" />{' '}
              </Link>
              <Link to="">
                {' '}
                <img src={Twitter} alt="Twitter" />{' '}
              </Link>
              <Link to="">
                {' '}
                <img src={Telegram} alt="Telegram" />{' '}
              </Link>
            </div>
          </div>
          <div className="footer-section">
            <h4>Центр обслуживания клиентов</h4>
            <p>
              тел: +7(705)000 00 00 <br /> 9:00 - 18:00
            </p>
            <p>Будни: Консультация по всем вопросам</p>
            <p>
              Суббота, праздничные дни: прямая доставка в YurtaHome,
              консультации по вопросам
            </p>
            <p>Воскресенье: закрыто</p>
          </div>
          <div className="divider"></div>
          <div className="footer-section">
            <h4>Навигация</h4>
            <ul className="footer-nav">
              <li>
                <Link to="">Большая распродажа</Link>
              </li>
              <li>
                <Link to="">Сегодняшняя сделка</Link>
              </li>
              <li>
                <Link to="">Конкурс</Link>
              </li>
              <li>
                <Link to="">Покупка продуктов</Link>
              </li>
              <li>
                <Link to="">Быстрая доставка</Link>
              </li>
              <li>
                <Link to="">Уборка при заезде</Link>
              </li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="footer-section">
            <h4>О нас</h4>
            <ul className="footer-nav">
              <li>
                <Link to="">Подать заявку на партнерство</Link>
              </li>
              <li>
                <Link to="">Вопросы о партнерстве/рекламе</Link>
              </li>
              <li>
                <Link to="">Рекламные пакеты</Link>
              </li>
              <li>
                <Link to="">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link to="">Информация по набору персонала</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
