import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: 'event' | 'news';
  category: string;
  description: string;
  location?: string;
  spots?: number;
  image?: string;
}

export default function Events() {
  const items: Event[] = [
    {
      id: 1,
      title: 'Встреча с переводчиком японской литературы',
      date: '25 октября 2025',
      time: '18:00',
      type: 'event',
      category: 'Литературная встреча',
      description: 'Приглашаем на встречу с известным переводчиком японской литературы Дмитрием Ковалениным. Обсудим особенности перевода произведений Мураками и Кавабаты.',
      location: 'Конференц-зал, 2 этаж',
      spots: 15,
    },
    {
      id: 2,
      title: 'Книжный клуб: читаем "Норвежский лес"',
      date: '28 октября 2025',
      time: '19:00',
      type: 'event',
      category: 'Книжный клуб',
      description: 'Очередное заседание книжного клуба посвящено роману Харуки Мураками "Норвежский лес". Обсуждение книги, обмен впечатлениями.',
      location: 'Читальный зал №3',
      spots: 8,
    },
    {
      id: 3,
      title: 'Новое поступление: японская классика',
      date: '20 октября 2025',
      time: '',
      type: 'news',
      category: 'Новые книги',
      description: 'В библиотеку поступили новые издания классической японской литературы: произведения Акутагавы, Танидзаки и Натсумэ Сосэки.',
    },
    {
      id: 4,
      title: 'Мастер-класс по каллиграфии',
      date: '2 ноября 2025',
      time: '15:00',
      type: 'event',
      category: 'Мастер-класс',
      description: 'Познакомьтесь с искусством японской каллиграфии. Мастер-класс проведет художник Анна Сакурова.',
      location: 'Творческая мастерская',
      spots: 12,
    },
    {
      id: 5,
      title: 'Открытие выставки "Япония в книжной иллюстрации"',
      date: '5 ноября 2025',
      time: '17:00',
      type: 'event',
      category: 'Выставка',
      description: 'Приглашаем на открытие выставки, посвященной искусству книжной иллюстрации в японских изданиях.',
      location: 'Выставочный зал',
      spots: 30,
    },
    {
      id: 6,
      title: 'Продление часов работы библиотеки',
      date: '22 октября 2025',
      time: '',
      type: 'news',
      category: 'Объявление',
      description: 'С 1 ноября библиотека будет работать до 22:00 в будние дни. Читальные залы открыты для всех желающих.',
    },
  ];

  const events = items.filter((item) => item.type === 'event');
  const news = items.filter((item) => item.type === 'news');

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">События и новости</h1>
            <p className="text-lg text-muted-foreground">
              Актуальные мероприятия и последние новости библиотеки
            </p>
          </div>

          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="events">События</TabsTrigger>
              <TabsTrigger value="news">Новости</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Badge variant={item.type === 'event' ? 'default' : 'secondary'}>
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Icon name="Calendar" size={14} />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      {item.time && (
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Clock" size={14} />
                          {item.time}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      {item.location && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="MapPin" size={14} className="text-primary" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      {item.spots !== undefined && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Users" size={14} className="text-primary" />
                            <span>Осталось мест: {item.spots}</span>
                          </div>
                          {item.type === 'event' && (
                            <Button size="sm">
                              <Icon name="Calendar" size={14} className="mr-2" />
                              Записаться
                            </Button>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Badge>{event.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Icon name="Calendar" size={14} />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Clock" size={14} />
                        {event.time}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="MapPin" size={14} className="text-primary" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      {event.spots !== undefined && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm">
                            <Icon name="Users" size={14} className="text-primary" />
                            <span>Осталось мест: {event.spots}</span>
                          </div>
                          <Button size="sm">
                            <Icon name="Calendar" size={14} className="mr-2" />
                            Записаться
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Icon name="Calendar" size={14} />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Хотите получать уведомления о событиях?</h3>
            <p className="text-muted-foreground mb-6">
              Подпишитесь на нашу рассылку и узнавайте первыми о новых мероприятиях
            </p>
            <Button size="lg">
              <Icon name="Bell" size={20} className="mr-2" />
              Подписаться на рассылку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
