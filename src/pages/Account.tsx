import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const borrowedBooks = [
  {
    id: 1,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    dueDate: '5 ноября 2025',
    daysLeft: 15,
  },
  {
    id: 2,
    title: 'Война и мир',
    author: 'Лев Толстой',
    dueDate: '12 ноября 2025',
    daysLeft: 22,
  },
];

const reservedBooks = [
  {
    id: 1,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    status: 'Готова к выдаче',
    pickupBy: '25 октября 2025',
  },
];

const readingHistory = [
  { id: 1, title: 'Евгений Онегин', author: 'Александр Пушкин', returnDate: '15 октября 2025' },
  { id: 2, title: 'Анна Каренина', author: 'Лев Толстой', returnDate: '8 октября 2025' },
  { id: 3, title: 'Герой нашего времени', author: 'Михаил Лермонтов', returnDate: '1 октября 2025' },
];

export default function Account() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-background py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                ИП
              </div>
              <div>
                <h1 className="text-4xl font-bold">Иван Петров</h1>
                <p className="text-muted-foreground">Читательский билет №12345</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Книг на руках</CardTitle>
                  <Icon name="BookOpen" className="text-primary" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{borrowedBooks.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Забронировано</CardTitle>
                  <Icon name="BookMarked" className="text-primary" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{reservedBooks.length}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Прочитано книг</CardTitle>
                  <Icon name="TrendingUp" className="text-primary" size={20} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="borrowed" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-3">
                <TabsTrigger value="borrowed">На руках</TabsTrigger>
                <TabsTrigger value="reserved">Бронь</TabsTrigger>
                <TabsTrigger value="history">История</TabsTrigger>
              </TabsList>

              <TabsContent value="borrowed" className="space-y-4 mt-6">
                {borrowedBooks.map((book) => (
                  <Card key={book.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{book.title}</CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </div>
                        <Icon name="BookOpen" size={24} className="text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Calendar" size={16} />
                            <span>Срок сдачи: {book.dueDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Clock" size={16} />
                            <span>Осталось дней: {book.daysLeft}</span>
                          </div>
                        </div>
                        <Button variant="outline">Продлить</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reserved" className="space-y-4 mt-6">
                {reservedBooks.map((book) => (
                  <Card key={book.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{book.title}</CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </div>
                        <Badge>{book.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Calendar" size={16} />
                          <span>Забрать до: {book.pickupBy}</span>
                        </div>
                        <Button>Получить</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="space-y-4 mt-6">
                {readingHistory.map((book) => (
                  <Card key={book.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{book.title}</CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <Icon name="CheckCircle" size={16} className="inline mr-1" />
                          {book.returnDate}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}