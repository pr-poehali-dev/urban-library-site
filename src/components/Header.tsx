import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/catalog', label: 'Каталог книг' },
    { href: '/events', label: 'События' },
    { href: '/account', label: 'Личный кабинет' },
    { href: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="Library" size={28} className="text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Городская библиотека</h1>
              <p className="text-xs text-muted-foreground">Мир знаний открыт для вас</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 px-4 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button size="sm" className="w-full">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
