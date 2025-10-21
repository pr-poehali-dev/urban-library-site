import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const upcomingEvents = [
  {
    id: 1,
    title: 'Встреча с современным писателем',
    date: '25 октября 2025',
    time: '18:00',
    category: 'Литературный клуб',
    spots: 15,
    description: 'Приглашаем на встречу с автором бестселлеров. Обсудим новую книгу и творческий путь.',
    image: 'https://cdn.poehali.dev/projects/6bf101fc-90f2-4c70-839e-26172956deae/files/4eda9ae7-a1c0-4863-934f-fff77dc2e485.jpg'
  },
  {
    id: 2,
    title: 'Литературный клуб: Русская классика',
    date: '28 октября 2025',
    time: '19:00',
    category: 'Литературный клуб',
    spots: 8,
    description: 'Обсуждаем произведения Достоевского и их актуальность в современном мире.',
    image: 'https://cdn.poehali.dev/projects/6bf101fc-90f2-4c70-839e-26172956deae/files/fe62f092-eedb-47d2-870d-2771e41e7e84.jpg'
  },
  {
    id: 3,
    title: 'Детский час: Сказки народов мира',
    date: '30 октября 2025',
    time: '15:00',
    category: 'Для детей',
    spots: 20,
    description: 'Читаем и обсуждаем сказки разных стран. Творческие мастер-классы для детей 5-10 лет.',
    image: 'https://cdn.poehali.dev/projects/6bf101fc-90f2-4c70-839e-26172956deae/files/4c9b1d0b-41be-402f-ab05-ee104b45f906.jpg'
  },
  {
    id: 4,
    title: 'Курс: Основы креативного письма',
    date: '2 ноября 2025',
    time: '17:00',
    category: 'Образование',
    spots: 12,
    description: 'Начало курса для начинающих авторов. Учимся писать рассказы и развивать творческое мышление.',
    image: 'https://cdn.poehali.dev/projects/6bf101fc-90f2-4c70-839e-26172956deae/files/4c9b1d0b-41be-402f-ab05-ee104b45f906.jpg'
  },
];

const news = [
  {
    id: 1,
    title: 'Новые поступления: 500 книг в октябре',
    date: '15 октября 2025',
    category: 'Новинки',
    content: 'В библиотеку поступило 500 новых книг современных авторов, классической литературы и научных изданий.'
  },
  {
    id: 2,
    title: 'Обновленная детская зона открыта',
    date: '10 октября 2025',
    category: 'Новости',
    content: 'После ремонта открылась обновленная детская секция с новой мебелью и игровой зоной.'
  },
  {
    id: 3,
    title: 'График работы в праздничные дни',
    date: '5 октября 2025',
    category: 'Объявление',
    content: 'В связи с предстоящими праздниками библиотека будет работать по измененному графику.'
  },
];

const Events = () => {
  return (
    <Layout>
      <section className="py-12 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">События и новости</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Следите за актуальными событиями и новостями библиотеки
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="events">Мероприятия</TabsTrigger>
              <TabsTrigger value="news">Новости</TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Предстоящие мероприятия</h2>
                <p className="text-muted-foreground">
                  Регистрируйтесь заранее — количество мест ограничено
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    >
                      <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <Badge className="bg-white text-foreground">{event.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {event.time}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span>
                          Осталось мест: <span className="font-semibold">{event.spots}</span>
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Icon name="UserPlus" size={18} className="mr-2" />
                        Записаться
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Новости библиотеки</h2>
                <p className="text-muted-foreground">
                  Актуальные объявления и важная информация
                </p>
              </div>

              <div className="space-y-6 max-w-3xl">
                {news.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-3">
                            <Badge variant="secondary">{item.category}</Badge>
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {item.date}
                            </span>
                          </CardDescription>
                        </div>
                        <Icon name="Newspaper" size={32} className="text-primary/40" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.content}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="p-0">
                        Читать полностью
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Bell" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
            <p className="text-muted-foreground mb-6">
              Получайте уведомления о новых мероприятиях и книгах на вашу почту
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
