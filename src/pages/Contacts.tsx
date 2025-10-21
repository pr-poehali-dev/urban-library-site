import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <Layout>
      <section className="py-12 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Как с нами связаться</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle>Адрес</CardTitle>
                        <CardDescription className="mt-2">
                          г. Москва, ул. Пушкинская, д. 10
                          <br />
                          Метро "Пушкинская", выход 2
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>Режим работы</CardTitle>
                        <CardDescription className="mt-2">
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Понедельник - Пятница:</span>
                              <span className="font-medium">9:00 - 20:00</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Суббота - Воскресенье:</span>
                              <span className="font-medium">10:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between text-destructive">
                              <span>Санитарный день:</span>
                              <span className="font-medium">Последний четверг месяца</span>
                            </div>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle>Телефоны</CardTitle>
                        <CardDescription className="mt-2 space-y-1">
                          <div>
                            <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                              +7 (495) 123-45-67
                            </a>{' '}
                            — Справочная служба
                          </div>
                          <div>
                            <a href="tel:+74951234568" className="hover:text-primary transition-colors">
                              +7 (495) 123-45-68
                            </a>{' '}
                            — Абонемент
                          </div>
                          <div>
                            <a href="tel:+74951234569" className="hover:text-primary transition-colors">
                              +7 (495) 123-45-69
                            </a>{' '}
                            — Детская секция
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle>Email</CardTitle>
                        <CardDescription className="mt-2 space-y-1">
                          <div>
                            <a href="mailto:info@library.ru" className="hover:text-primary transition-colors">
                              info@library.ru
                            </a>{' '}
                            — Общие вопросы
                          </div>
                          <div>
                            <a href="mailto:events@library.ru" className="hover:text-primary transition-colors">
                              events@library.ru
                            </a>{' '}
                            — Мероприятия
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Share2" size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>Социальные сети</CardTitle>
                        <div className="flex gap-3 mt-4">
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                            aria-label="ВКонтакте"
                          >
                            <Icon name="Share2" size={18} />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                            aria-label="Telegram"
                          >
                            <Icon name="Send" size={18} />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                            aria-label="Одноклассники"
                          >
                            <Icon name="Users" size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя *</Label>
                        <Input id="name" placeholder="Ваше имя" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема обращения *</Label>
                      <Input id="subject" placeholder="Кратко опишите тему" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите ваш вопрос или предложение..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      * — обязательные поля. Мы ответим в течение 1-2 рабочих дней.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Как нас найти</h2>
          <div className="aspect-video max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="Map" size={64} className="mx-auto mb-4 text-primary/40" />
              <p className="text-muted-foreground">Интерактивная карта</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Car" size={32} className="mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">На автомобиле</h3>
                    <p className="text-sm text-muted-foreground">
                      Парковка рядом с библиотекой, 50 мест
                    </p>
                  </div>
                  <div>
                    <Icon name="Train" size={32} className="mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">На метро</h3>
                    <p className="text-sm text-muted-foreground">
                      Станция "Пушкинская", 5 минут пешком
                    </p>
                  </div>
                  <div>
                    <Icon name="Bus" size={32} className="mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-1">На автобусе</h3>
                    <p className="text-sm text-muted-foreground">
                      Остановка "Библиотека", маршруты 12, 45, 78
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
