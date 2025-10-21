import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Library" size={28} className="text-primary" />
              <span className="font-bold text-lg">Городская библиотека</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Центр знаний, культуры и образования. Открыты для всех, кто любит книги и стремится к знаниям.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Каталог книг
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  События и новости
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  г. Москва, ул. Пушкинская, д. 10
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+74951234567" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:info@library.ru" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@library.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                aria-label="ВКонтакте"
              >
                <Icon name="Share2" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                aria-label="Одноклассники"
              >
                <Icon name="Users" size={18} />
              </a>
            </div>
            <p className="text-xs text-secondary-foreground/60">
              Следите за новостями и мероприятиями
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 Городская библиотека. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Правила использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
