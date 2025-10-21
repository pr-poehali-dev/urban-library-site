import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqItems = [
    {
      question: 'Как получить читательский билет?',
      answer: 'Для получения читательского билета необходимо обратиться на стойку регистрации с паспортом. Регистрация бесплатная и занимает около 5 минут.',
    },
    {
      question: 'Сколько книг можно взять одновременно?',
      answer: 'Читатели могут взять до 5 книг одновременно. Срок выдачи — 14 дней с возможностью продления.',
    },
    {
      question: 'Можно ли продлить срок возврата книги?',
      answer: 'Да, книгу можно продлить на 7 дней через личный кабинет на сайте или позвонив в библиотеку. Продление возможно, если на книгу нет очереди.',
    },
    {
      question: 'Есть ли штрафы за просрочку?',
      answer: 'За просрочку возврата книги взимается штраф 10 рублей за каждый день. При задержке более 30 дней читательский билет блокируется до возврата книги.',
    },
    {
      question: 'Можно ли забронировать книгу онлайн?',
      answer: 'Да, вы можете забронировать любую доступную книгу через каталог на сайте. Забронированная книга будет ждать вас в течение 3 дней.',
    },
    {
      question: 'Как записаться на мероприятие?',
      answer: 'Записаться на мероприятие можно через раздел "События и новости" на сайте, по телефону или лично в библиотеке.',
    },
    {
      question: 'Есть ли в библиотеке Wi-Fi?',
      answer: 'Да, в библиотеке доступен бесплатный Wi-Fi. Пароль можно узнать у администратора.',
    },
    {
      question: 'Работает ли библиотека в праздники?',
      answer: 'В праздничные дни библиотека работает по сокращенному графику. Актуальное расписание публикуется на сайте и в социальных сетях.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground">Мы всегда рады помочь и ответить на ваши вопросы</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Напишите нам, и мы ответим в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Ваше сообщение..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Москва, ул. Пушкина, д. 10</p>
                      <p className="text-sm text-muted-foreground">м. Пушкинская (5 мин пешком)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <a href="tel:+74951234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (495) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:info@library.ru"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@library.ru
                      </a>
                      <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Понедельник - Пятница: 9:00 - 21:00</p>
                        <p>Суббота - Воскресенье: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Мы в социальных сетях</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Facebook" size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Instagram" size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Twitter" size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Youtube" size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Часто задаваемые вопросы (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
              <p className="mb-6 opacity-90">
                Свяжитесь с нами любым удобным способом, и мы обязательно вам поможем!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
                <Button size="lg" variant="secondary">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
