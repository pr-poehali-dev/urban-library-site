import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contacts() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground">Мы всегда рады помочь вам</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Ваше сообщение..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Информация</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="MapPin" size={24} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle>Адрес</CardTitle>
                            <CardDescription className="mt-2">
                              г. Москва, ул. Пушкина, д. 10<br />
                              Метро: Чистые пруды
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Phone" size={24} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle>Телефон</CardTitle>
                            <CardDescription className="mt-2">
                              +7 (495) 123-45-67<br />
                              +7 (495) 123-45-68
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Mail" size={24} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle>Email</CardTitle>
                            <CardDescription className="mt-2">
                              info@library.ru<br />
                              support@library.ru
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Clock" size={24} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle>Режим работы</CardTitle>
                            <CardDescription className="mt-2">
                              Понедельник - Пятница: 9:00 - 20:00<br />
                              Суббота: 10:00 - 18:00<br />
                              Воскресенье: выходной
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Как получить читательский билет?</AccordionTrigger>
                  <AccordionContent>
                    Для получения читательского билета необходимо предъявить паспорт и заполнить анкету в регистратуре библиотеки. 
                    Оформление билета занимает 10-15 минут и является бесплатным.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>На сколько дней можно взять книгу?</AccordionTrigger>
                  <AccordionContent>
                    Стандартный срок выдачи книги - 30 дней. По запросу вы можете продлить срок еще на 30 дней онлайн 
                    или по телефону. Учебную литературу выдают на семестр.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Сколько книг можно взять одновременно?</AccordionTrigger>
                  <AccordionContent>
                    Читатели могут одновременно взять до 5 книг на дом. Для студентов и преподавателей возможность 
                    выдачи до 10 книг при наличии учебного абонемента.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Есть ли штрафы за просрочку?</AccordionTrigger>
                  <AccordionContent>
                    За каждый день просрочки взимается штраф в размере 10 рублей за книгу. Рекомендуем продлевать 
                    срок возврата заранее, чтобы избежать штрафов.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Можно ли записаться на мероприятие онлайн?</AccordionTrigger>
                  <AccordionContent>
                    Да, вы можете записаться на любое мероприятие через наш сайт в разделе "События" или позвонив 
                    по телефону +7 (495) 123-45-67. Также доступна запись через мобильное приложение.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Есть ли бесплатный Wi-Fi в библиотеке?</AccordionTrigger>
                  <AccordionContent>
                    Да, во всех читальных залах библиотеки доступен бесплатный Wi-Fi. Пароль можно получить у 
                    администратора на стойке регистрации.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h2>
              <p className="text-lg mb-6 text-white/90">
                Приходите к нам в библиотеку или позвоните - мы с радостью поможем!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить нам
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Как добраться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}