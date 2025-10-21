import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Book {
  id: number;
  title: string;
  titleEn: string;
  author: string;
  authorEn: string;
  year: number;
  genre: string;
  available: boolean;
  description: string;
}

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const books: Book[] = [
    {
      id: 1,
      title: 'Исповедь маски',
      titleEn: 'Confessions of a Mask',
      author: 'Юкио Мисима',
      authorEn: 'Yukio Mishima',
      year: 1949,
      genre: 'Художественная литература',
      available: true,
      description: 'Автобиографический роман о становлении личности в послевоенной Японии.',
    },
    {
      id: 2,
      title: 'Золотой храм',
      titleEn: 'The Temple of the Golden Pavilion',
      author: 'Юкио Мисима',
      authorEn: 'Yukio Mishima',
      year: 1956,
      genre: 'Художественная литература',
      available: true,
      description: 'Роман о красоте, одержимости и разрушении.',
    },
    {
      id: 3,
      title: 'Снежная страна',
      titleEn: 'Snow Country',
      author: 'Ясунари Кавабата',
      authorEn: 'Yasunari Kawabata',
      year: 1948,
      genre: 'Классическая литература',
      available: false,
      description: 'Лирическая история любви на фоне зимних японских гор.',
    },
    {
      id: 4,
      title: 'Тысячекрылый журавль',
      titleEn: 'Thousand Cranes',
      author: 'Ясунари Кавабата',
      authorEn: 'Yasunari Kawabata',
      year: 1952,
      genre: 'Классическая литература',
      available: true,
      description: 'Роман о чайной церемонии и сложных человеческих отношениях.',
    },
    {
      id: 5,
      title: 'Норвежский лес',
      titleEn: 'Norwegian Wood',
      author: 'Харуки Мураками',
      authorEn: 'Haruki Murakami',
      year: 1987,
      genre: 'Современная проза',
      available: true,
      description: 'История любви и утраты на фоне студенческих волнений 1960-х.',
    },
    {
      id: 6,
      title: 'Кафка на пляже',
      titleEn: 'Kafka on the Shore',
      author: 'Харуки Мураками',
      authorEn: 'Haruki Murakami',
      year: 2002,
      genre: 'Современная проза',
      available: true,
      description: 'Магический реализм и поиск себя в современной Японии.',
    },
    {
      id: 7,
      title: '1Q84',
      titleEn: '1Q84',
      author: 'Харуки Мураками',
      authorEn: 'Haruki Murakami',
      year: 2009,
      genre: 'Современная проза',
      available: false,
      description: 'Эпическая история о параллельных мирах и судьбах.',
    },
    {
      id: 8,
      title: 'Кухня',
      titleEn: 'Kitchen',
      author: 'Банана Ёсимото',
      authorEn: 'Banana Yoshimoto',
      year: 1988,
      genre: 'Современная проза',
      available: true,
      description: 'Трогательная история о потере, семье и новых началах.',
    },
    {
      id: 9,
      title: 'Признания якудзы',
      titleEn: 'Confessions of a Yakuza',
      author: 'Дзюнъити Сага',
      authorEn: 'Junichi Saga',
      year: 1989,
      genre: 'Документальная проза',
      available: true,
      description: 'Реальная история жизни члена японской мафии.',
    },
    {
      id: 10,
      title: 'Удобное место',
      titleEn: 'Convenience Store Woman',
      author: 'Саяка Мурата',
      authorEn: 'Sayaka Murata',
      year: 2016,
      genre: 'Современная проза',
      available: true,
      description: 'Сатирический роман о жизни в современной Японии.',
    },
  ];

  const alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ'.split('');

  const genres = ['Художественная литература', 'Классическая литература', 'Современная проза', 'Документальная проза'];

  const getAuthorLastName = (author: string) => {
    return author.split(' ')[0];
  };

  const getFirstLetter = (author: string) => {
    return getAuthorLastName(author)[0].toUpperCase();
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLetter = selectedLetter === 'all' || getFirstLetter(book.author) === selectedLetter;

    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;

    return matchesSearch && matchesLetter && matchesGenre;
  });

  const groupedBooks = filteredBooks.reduce((acc, book) => {
    const letter = getFirstLetter(book.author);
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(book);
    return acc;
  }, {} as Record<string, Book[]>);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог книг</h1>
            <p className="text-lg text-muted-foreground">
              Японская литература от классики до современности
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск по названию, автору или жанру..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg"
              />
              <Icon name="Search" size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="Жанр" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все жанры</SelectItem>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="BookOpen" size={16} />
                <span>Найдено книг: {filteredBooks.length}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={selectedLetter === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedLetter('all')}
              >
                Все
              </Button>
              {alphabet.map((letter) => {
                const hasBooks = books.some((book) => getFirstLetter(book.author) === letter);
                return (
                  <Button
                    key={letter}
                    size="sm"
                    variant={selectedLetter === letter ? 'default' : 'outline'}
                    onClick={() => setSelectedLetter(letter)}
                    disabled={!hasBooks}
                    className="w-10"
                  >
                    {letter}
                  </Button>
                );
              })}
            </div>
          </div>

          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="BookX" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Книги не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.keys(groupedBooks)
                .sort()
                .map((letter) => (
                  <div key={letter}>
                    <h2 className="text-3xl font-bold mb-6 text-primary">{letter}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {groupedBooks[letter].map((book) => (
                        <Card key={book.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <CardTitle className="text-xl mb-1">{book.title}</CardTitle>
                                <CardDescription className="text-sm mb-2">{book.titleEn}</CardDescription>
                                <div className="flex items-center gap-2 text-sm">
                                  <Icon name="User" size={14} className="text-muted-foreground" />
                                  <span className="font-medium">{book.author}</span>
                                  <span className="text-muted-foreground">• {book.year}</span>
                                </div>
                              </div>
                              <Badge variant={book.available ? 'default' : 'secondary'}>
                                {book.available ? 'Доступна' : 'Занята'}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <Badge variant="outline">{book.genre}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{book.description}</p>
                              <div className="flex gap-2">
                                <Button className="flex-1" disabled={!book.available}>
                                  <Icon name="BookMarked" size={16} className="mr-2" />
                                  {book.available ? 'Забронировать' : 'Недоступна'}
                                </Button>
                                <Button variant="outline" size="icon">
                                  <Icon name="Heart" size={16} />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
