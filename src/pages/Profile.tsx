import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Profile() {
  const borrowedBooks = [
    {
      id: 1,
      title: 'Норвежский лес',
      author: 'Харуки Мураками',
      borrowDate: '10 октября 2025',
      returnDate: '24 октября 2025',
      daysLeft: 3,
    },
    {
      id: 2,
      title: 'Кафка на пляже',
      author: 'Харуки Мураками',
      borrowDate: '15 октября 2025',
      returnDate: '29 октября 2025',
      daysLeft: 8,
    },
  ];

  const reservedBooks = [
    {
      id: 3,
      title: '1Q84',
      author: 'Харуки Мураками',
      reserveDate: '18 октября 2025',
      availableDate: '25 октября 2025',
    },
  ];

  const favoriteBooks = [
    {
      id: 4,
      title: 'Снежная страна',
      author: 'Ясунари Кавабата',
      year: 1948,
      available: false,
    },
    {
      id: 5,
      title: 'Золотой храм',
      author: 'Юкио Мисима',
      year: 1956,
      available: true,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Книжный клуб: читаем "Норвежский лес"',
      date: '28 октября 2025',
      time: '19:00',
    },
    {
      id: 2,
      title: 'Мастер-класс по каллиграфии',
      date: '2 ноября 2025',
      time: '15:00',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Личный кабинет</h1>
                <p className="text-lg text-muted-foreground">Управляйте своими книгами и записями</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mb-2">
                    АИ
                  </div>
                  <Badge>Активный читатель</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Книг на руках</CardDescription>
                <CardTitle className="text-3xl">{borrowedBooks.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="BookOpen" size={16} />
                  <span>Лимит: 5 книг</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Забронировано</CardDescription>
                <CardTitle className="text-3xl">{reservedBooks.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="BookMarked" size={16} />
                  <span>Ожидают получения</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Предстоящие события</CardDescription>
                <CardTitle className="text-3xl">{upcomingEvents.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Записи на мероприятия</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="borrowed" className="space-y-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="borrowed">На руках</TabsTrigger>
              <TabsTrigger value="reserved">Брони</TabsTrigger>
              <TabsTrigger value="favorites">Избранное</TabsTrigger>
              <TabsTrigger value="events">События</TabsTrigger>
            </TabsList>

            <TabsContent value="borrowed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Взятые книги</CardTitle>
                  <CardDescription>Не забудьте вернуть книги вовремя</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {borrowedBooks.map((book) => (
                    <div key={book.id} className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} className="text-muted-foreground" />
                            <span>Взято: {book.borrowDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} className="text-muted-foreground" />
                            <span>Вернуть до: {book.returnDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={book.daysLeft <= 3 ? 'destructive' : 'default'}>
                          {book.daysLeft} дн.
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Icon name="RotateCcw" size={14} className="mr-2" />
                          Продлить
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reserved" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Забронированные книги</CardTitle>
                  <CardDescription>Книги, зарезервированные для вас</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reservedBooks.map((book) => (
                    <div key={book.id} className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} className="text-muted-foreground" />
                            <span>Забронировано: {book.reserveDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} className="text-primary" />
                            <span>Доступна: {book.availableDate}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm">
                        <Icon name="CheckCircle" size={14} className="mr-2" />
                        Получить
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Избранные книги</CardTitle>
                  <CardDescription>Книги, добавленные в избранное</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {favoriteBooks.map((book) => (
                    <div key={book.id} className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {book.author} • {book.year}
                        </p>
                        <Badge variant={book.available ? 'default' : 'secondary'}>
                          {book.available ? 'Доступна' : 'Занята'}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" disabled={!book.available}>
                          <Icon name="BookMarked" size={14} className="mr-2" />
                          Забронировать
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Icon name="Heart" size={14} className="text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Мои записи на события</CardTitle>
                  <CardDescription>Мероприятия, на которые вы записались</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start justify-between gap-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} className="text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} className="text-primary" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Icon name="X" size={14} className="mr-2" />
                        Отменить
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
