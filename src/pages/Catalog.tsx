import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const books = [
  {
    id: 1,
    title: 'Норвежский лес',
    author: 'Харуки Мураками',
    genre: 'Современная проза',
    year: 1987,
    available: true,
    rating: 4.8,
    description: 'История о любви, потере и взрослении в Японии 1960-х годов'
  },
  {
    id: 2,
    title: 'Кафка на пляже',
    author: 'Харуки Мураками',
    genre: 'Современная проза',
    year: 2002,
    available: true,
    rating: 4.7,
    description: 'Сюрреалистический роман о пятнадцатилетнем мальчике в поисках себя'
  },
  {
    id: 3,
    title: 'Дом, где восходит солнце',
    author: 'Кэндзабуро Оэ',
    genre: 'Современная проза',
    year: 1958,
    available: true,
    rating: 4.5,
    description: 'История о послевоенной Японии и поисках идентичности'
  },
  {
    id: 4,
    title: 'Кухня',
    author: 'Банана Ёсимото',
    genre: 'Современная проза',
    year: 1988,
    available: false,
    rating: 4.6,
    description: 'Нежная история о горе, исцелении и необычной семье'
  },
  {
    id: 5,
    title: 'Снежная страна',
    author: 'Ясунари Кавабата',
    genre: 'Классика',
    year: 1948,
    available: true,
    rating: 4.9,
    description: 'Лирический роман о токийском эстете и гейше в горах'
  },
  {
    id: 6,
    title: 'Исповедь маски',
    author: 'Юкио Мисима',
    genre: 'Классика',
    year: 1949,
    available: true,
    rating: 4.7,
    description: 'Автобиографический роман о внутренних конфликтах молодого человека'
  },
  {
    id: 7,
    title: 'Тысячекрылый журавль',
    author: 'Ясунари Кавабата',
    genre: 'Классика',
    year: 1952,
    available: true,
    rating: 4.6,
    description: 'Роман о японской чайной церемонии и сложных отношениях'
  },
  {
    id: 8,
    title: 'Хроники заводной птицы',
    author: 'Харуки Мураками',
    genre: 'Современная проза',
    year: 1995,
    available: false,
    rating: 4.8,
    description: 'Эпический роман о поисках пропавшей жены в сюрреалистическом Токио'
  },
  {
    id: 9,
    title: 'Женщина в песках',
    author: 'Кобо Абэ',
    genre: 'Современная проза',
    year: 1962,
    available: true,
    rating: 4.7,
    description: 'Экзистенциальный роман об учителе, попавшем в ловушку в песчаной дюне'
  },
  {
    id: 10,
    title: 'Тёмный бег',
    author: 'Банана Ёсимото',
    genre: 'Современная проза',
    year: 1988,
    available: true,
    rating: 4.4,
    description: 'Сборник рассказов о современной молодежи Японии'
  },
  {
    id: 11,
    title: 'Золотой храм',
    author: 'Юкио Мисима',
    genre: 'Классика',
    year: 1956,
    available: true,
    rating: 4.8,
    description: 'Роман о монахе-послушнике и его одержимости красотой'
  },
  {
    id: 12,
    title: 'Странствие на восток',
    author: 'Ацуси Накадзима',
    genre: 'Классика',
    year: 1942,
    available: false,
    rating: 4.5,
    description: 'Сборник литературных фантазий на темы классической поэзии'
  },
  {
    id: 13,
    title: 'Страна снегов',
    author: 'Ясунари Кавабата',
    genre: 'Классика',
    year: 1956,
    available: true,
    rating: 4.7,
    description: 'Сборник новелл о красоте японской природы и традиций'
  },
  {
    id: 14,
    title: '1Q84',
    author: 'Харуки Мураками',
    genre: 'Современная проза',
    year: 2009,
    available: true,
    rating: 4.6,
    description: 'Масштабный роман о параллельных мирах и судьбах двух героев'
  },
  {
    id: 15,
    title: 'Ничто в мире не вечно',
    author: 'Рю Мураками',
    genre: 'Современная проза',
    year: 1976,
    available: true,
    rating: 4.3,
    description: 'Дебютный роман о молодежном бунте в послевоенной Японии'
  },
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');

  const filteredBooks = books
    .filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = genreFilter === 'all' || book.genre === genreFilter;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => a.author.localeCompare(b.author));

  return (
    <Layout>
      <section className="py-12 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог книг</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Более 50 000 книг в нашей коллекции. Найдите свою следующую любимую книгу
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Поиск по названию или автору..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Жанр" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все жанры</SelectItem>
                <SelectItem value="Классика">Классика</SelectItem>
                <SelectItem value="Современная проза">Современная проза</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full md:w-auto">
              <Icon name="SlidersHorizontal" size={18} className="mr-2" />
              Фильтры
            </Button>
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Найдено книг: <span className="font-semibold text-foreground">{filteredBooks.length}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-md mb-4 flex items-center justify-center">
                    <Icon name="BookOpen" size={48} className="text-primary/40" />
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                  <CardDescription>{book.author} • {book.year}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{book.genre}</Badge>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                  </div>
                  {book.available ? (
                    <Badge className="w-full justify-center" variant="default">
                      <Icon name="Check" size={14} className="mr-1" />
                      В наличии
                    </Badge>
                  ) : (
                    <Badge className="w-full justify-center" variant="outline">
                      <Icon name="Clock" size={14} className="mr-1" />
                      Забронирована
                    </Badge>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button className="flex-1" disabled={!book.available}>
                    {book.available ? 'Забронировать' : 'В очереди'}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <Icon name="BookX" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Книги не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;