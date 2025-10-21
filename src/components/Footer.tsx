import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center">
                <Icon name="Library" size={24} />
              </div>
              <h3 className="font-bold text-lg">Городская библиотека</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Место, где книги встречаются с читателями. Культура, знания и вдохновение для всех.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Каталог книг
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  События и новости
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5 text-primary" />
                <span className="text-muted-foreground">г. Москва, ул. Пушкина, д. 10</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:info@library.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@library.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-2">Режим работы:</p>
              <p className="text-sm text-foreground">Пн-Пт: 9:00 - 21:00</p>
              <p className="text-sm text-foreground">Сб-Вс: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Городская библиотека. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
