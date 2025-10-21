import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const borrowedBooks = [
  {
    id: 1,
    title: 'Война и мир',
    author: 'Лев Толстой',
    borrowDate: '1 октября 2025',
    returnDate: '1 ноября 2025',
    daysLeft: 11,
  },
  {
    id: 2,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    borrowDate: '15 октября 2025',
    returnDate: '15 ноября 2025',
    daysLeft: 25,
  },
];

const reservedBooks = [
  {
    id: 1,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    queuePosition: 2,
    estimatedDate: '5 ноября 2025',
  },
];

const readingHistory = [
  {
    id: 1,
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    completedDate: '20 сентября 2025',
    rating: 5,
  },
  {
    id: 2,
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    completedDate: '10 сентября 2025',
    rating: 4,
  },
];

const Profile = () => {
  return (
    <Layout>
      <section className="py-12 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Личный кабинет</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Управляйте своим читательским аккаунтом
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="books">Книги</TabsTrigger>
              <TabsTrigger value="history">История</TabsTrigger>
              <TabsTrigger value="events">События</TabsTrigger>
              <TabsTrigger value="profile">Профиль</TabsTrigger>
            </TabsList>

            <TabsContent value="books" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="BookOpen" size={24} className="text-primary" />
                    Взятые книги ({borrowedBooks.length})
                  </h2>
                  <div className="space-y-4">
                    {borrowedBooks.map((book) => (
                      <Card key={book.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{book.title}</CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Взято:</span>
                              <span className="font-medium">{book.borrowDate}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Вернуть до:</span>
                              <span className="font-medium">{book.returnDate}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">Осталось дней:</span>
                              <Badge variant={book.daysLeft < 7 ? 'destructive' : 'default'}>
                                {book.daysLeft} {book.daysLeft === 1 ? 'день' : 'дней'}
                              </Badge>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button className="flex-1" variant="outline">
                                Продлить
                              </Button>
                              <Button className="flex-1">
                                Вернуть
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="Clock" size={24} className="text-primary" />
                    Забронированные ({reservedBooks.length})
                  </h2>
                  <div className="space-y-4">
                    {reservedBooks.map((book) => (
                      <Card key={book.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{book.title}</CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Позиция в очереди:</span>
                              <Badge variant="secondary">{book.queuePosition}</Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Ожидаемая дата:</span>
                              <span className="font-medium">{book.estimatedDate}</span>
                            </div>
                            <Button variant="outline" className="w-full mt-4">
                              Отменить бронь
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-8">
              <h2 className="text-2xl font-bold mb-6">История чтения</h2>
              <div className="space-y-4 max-w-3xl">
                {readingHistory.map((book) => (
                  <Card key={book.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{book.title}</CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={16}
                              className={i < book.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Прочитано: {book.completedDate}
                        </span>
                        <Button variant="link" className="p-0 h-auto">
                          Взять снова
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Мои мероприятия</h2>
              <Card className="max-w-3xl">
                <CardContent className="py-16 text-center">
                  <Icon name="CalendarOff" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Нет записей</h3>
                  <p className="text-muted-foreground mb-6">
                    Вы еще не записались ни на одно мероприятие
                  </p>
                  <Button asChild>
                    <a href="/events">
                      <Icon name="Calendar" size={18} className="mr-2" />
                      Посмотреть мероприятия
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="mt-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold mb-6">Личные данные</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Имя</Label>
                          <Input id="firstName" placeholder="Иван" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Фамилия</Label>
                          <Input id="lastName" placeholder="Иванов" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="ivan@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Номер читательского билета</Label>
                        <Input id="cardNumber" value="LIB-2025-001234" disabled />
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit">
                          <Icon name="Save" size={18} className="mr-2" />
                          Сохранить изменения
                        </Button>
                        <Button type="button" variant="outline">
                          Отмена
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Изменить пароль</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Текущий пароль</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Новый пароль</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button type="submit">
                        <Icon name="Lock" size={18} className="mr-2" />
                        Изменить пароль
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
