import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/catalog', label: 'Каталог книг' },
    { path: '/events', label: 'События и новости' },
    { path: '/profile', label: 'Личный кабинет' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center">
              <Icon name="Library" size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Городская библиотека</h1>
              <p className="text-xs text-muted-foreground">Знания и культура</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className="text-sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={location.pathname === item.path ? 'default' : 'ghost'}
                    className="w-full justify-start"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
