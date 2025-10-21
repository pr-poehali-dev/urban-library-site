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
    title: 'Война и мир',
    author: 'Лев Толстой',
    genre: 'Классика',
    year: 1869,
    available: true,
    rating: 4.8,
    description: 'Эпический роман о войне 1812 года и судьбах русского дворянства'
  },
  {
    id: 2,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    genre: 'Классика',
    year: 1967,
    available: true,
    rating: 4.9,
    description: 'Роман о дьяволе, посетившем Москву 1930-х годов'
  },
  {
    id: 3,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    genre: 'Классика',
    year: 1866,
    available: false,
    rating: 4.7,
    description: 'Психологический роман о преступлении и моральной ответственности'
  },
  {
    id: 4,
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    genre: 'Роман',
    year: 1877,
    available: true,
    rating: 4.6,
    description: 'История трагической любви на фоне жизни русского общества XIX века'
  },
  {
    id: 5,
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    genre: 'Поэзия',
    year: 1833,
    available: true,
    rating: 4.8,
    description: 'Роман в стихах о русской жизни и любви'
  },
  {
    id: 6,
    title: 'Мёртвые души',
    author: 'Николай Гоголь',
    genre: 'Классика',
    year: 1842,
    available: true,
    rating: 4.5,
    description: 'Поэма о похождениях Чичикова'
  },
  {
    id: 7,
    title: 'Идиот',
    author: 'Фёдор Достоевский',
    genre: 'Классика',
    year: 1869,
    available: false,
    rating: 4.6,
    description: 'Роман о князе Мышкине и его столкновении с обществом'
  },
  {
    id: 8,
    title: 'Отцы и дети',
    author: 'Иван Тургенев',
    genre: 'Роман',
    year: 1862,
    available: true,
    rating: 4.4,
    description: 'Роман о конфликте поколений и нигилизме'
  },
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = genreFilter === 'all' || book.genre === genreFilter;
    return matchesSearch && matchesGenre;
  });

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
                <SelectItem value="Роман">Роман</SelectItem>
                <SelectItem value="Поэзия">Поэзия</SelectItem>
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
