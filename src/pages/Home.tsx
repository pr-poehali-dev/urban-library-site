import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: 'BookOpen',
      title: 'Более 50 000 книг',
      description: 'Классическая и современная литература на любой вкус',
    },
    {
      icon: 'Calendar',
      title: 'Мероприятия и события',
      description: 'Лекции, встречи с авторами, книжные клубы',
    },
    {
      icon: 'Users',
      title: 'Читальные залы',
      description: 'Комфортные пространства для чтения и работы',
    },
    {
      icon: 'Sparkles',
      title: 'Детская библиотека',
      description: 'Специальная коллекция для юных читателей',
    },
  ];

  const popularBooks = [
    { title: 'Норвежский лес', author: 'Харуки Мураками', year: 1987 },
    { title: 'Кафка на пляже', author: 'Харуки Мураками', year: 2002 },
    { title: 'Снежная страна', author: 'Ясунари Кавабата', year: 1948 },
    { title: 'Исповедь маски', author: 'Юкио Мисима', year: 1949 },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Добро пожаловать в Городскую библиотеку
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Откройте для себя мир знаний, культуры и вдохновения. Тысячи книг, интересные события и комфортная атмосфера ждут вас.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/catalog">
                <Button size="lg" className="w-full sm:w-auto">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти книгу
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Посмотреть события
                </Button>
              </Link>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск по названию, автору или жанру..."
                  className="pl-12 pr-4 py-6 text-lg"
                />
                <Icon name="Search" size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Популярные книги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {popularBooks.map((book, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                    <CardDescription>{book.author} • {book.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="BookMarked" size={16} className="mr-2" />
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/catalog">
                <Button size="lg">
                  Смотреть весь каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Станьте читателем библиотеки</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Получите бесплатный читательский билет и доступ ко всем возможностям библиотеки
          </p>
          <Link to="/profile">
            <Button size="lg" variant="secondary">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
