import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/catalog', label: 'Каталог книг' },
    { path: '/events', label: 'События' },
    { path: '/profile', label: 'Личный кабинет' },
    { path: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Icon name="Library" size={32} className="text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">Городская библиотека</span>
              <span className="text-xs text-muted-foreground hidden md:block">Центр знаний и культуры</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Search" size={16} className="mr-2" />
                  Поиск
                </Button>
                <Button size="sm" className="w-full">
                  <Icon name="User" size={16} className="mr-2" />
                  Войти
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
