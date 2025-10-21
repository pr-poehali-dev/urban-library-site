import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Library" size={24} className="text-primary" />
              <h3 className="text-lg font-bold">Городская библиотека</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Открываем мир знаний для каждого жителя нашего города
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-primary transition-colors">
                  Каталог книг
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  События
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-primary transition-colors">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>ул. Пушкина, д. 10</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@library.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 9:00-20:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Городская библиотека. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
