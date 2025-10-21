import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://cdn.poehali.dev/projects/6bf101fc-90f2-4c70-839e-26172956deae/files/4c9b1d0b-41be-402f-ab05-ee104b45f906.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/50"></div>
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Добро пожаловать в мир знаний
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Городская библиотека — это больше 50 000 книг, культурные мероприятия и пространство для развития. Присоединяйтесь к нам!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link to="/catalog">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Каталог книг
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-white hover:bg-white/90" asChild>
                <Link to="/events">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Предстоящие события
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем широкий спектр услуг для читателей всех возрастов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <CardTitle>Абонемент</CardTitle>
                <CardDescription>Домашнее чтение на любой срок</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Возьмите книги домой и читайте в комфортной обстановке. Доступно более 50 000 изданий.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/catalog">
                    Перейти в каталог
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <CardTitle>Мероприятия</CardTitle>
                <CardDescription>Лекции, встречи, выставки</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Участвуйте в культурных событиях, встречах с авторами и тематических вечерах.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/events">
                    Календарь событий
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Monitor" size={24} className="text-primary" />
                </div>
                <CardTitle>Читальный зал</CardTitle>
                <CardDescription>Комфортное пространство для чтения</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Уютная атмосфера, тишина и все необходимое для продуктивной работы с книгами.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/contacts">
                    Время работы
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Laptop" size={24} className="text-primary" />
                </div>
                <CardTitle>Электронная библиотека</CardTitle>
                <CardDescription>Доступ к цифровым ресурсам</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Читайте электронные книги, журналы и базы данных онлайн из любой точки мира.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Узнать подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Детская секция</CardTitle>
                <CardDescription>Мир литературы для детей</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Специальная зона с книгами, играми и развивающими мероприятиями для детей.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Программа для детей
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <CardTitle>Курсы и лекции</CardTitle>
                <CardDescription>Образовательные программы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Обучающие курсы, мастер-классы и лекции по различным направлениям знаний.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/events">
                    Расписание курсов
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BookMarked" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Богатая коллекция</h3>
                    <p className="text-muted-foreground">
                      Более 50 000 книг, журналов и периодических изданий на разных языках и по всем отраслям знаний.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Удобный график</h3>
                    <p className="text-muted-foreground">
                      Открыты 7 дней в неделю. Работаем в будни до 20:00, в выходные до 18:00.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Современное пространство</h3>
                    <p className="text-muted-foreground">
                      Комфортные зоны для чтения, бесплатный Wi-Fi, компьютеры и уютная атмосфера.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Профессиональная команда</h3>
                    <p className="text-muted-foreground">
                      Опытные библиотекари помогут найти нужную книгу и подскажут интересные новинки.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/6bf101fc-90f2-4c70-839e-26172956deae/files/fe62f092-eedb-47d2-870d-2771e41e7e84.jpg"
                alt="Библиотека"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Получите читательский билет бесплатно</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Запишитесь в библиотеку онлайн и получите доступ ко всем нашим услугам уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base" asChild>
                <Link to="/profile">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Зарегистрироваться
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contacts">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о работе библиотеки
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Как получить читательский билет?
                </AccordionTrigger>
                <AccordionContent>
                  Для получения читательского билета необходимо предъявить паспорт и заполнить анкету. Услуга
                  предоставляется бесплатно. Также вы можете зарегистрироваться онлайн на нашем сайте в разделе
                  "Личный кабинет".
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  На какой срок можно взять книгу домой?
                </AccordionTrigger>
                <AccordionContent>
                  Стандартный срок выдачи книг — 30 дней. При необходимости вы можете продлить срок, если на книгу нет
                  очереди. Продление можно сделать онлайн в личном кабинете или по телефону.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Есть ли у вас электронные книги?
                </AccordionTrigger>
                <AccordionContent>
                  Да, у нас есть доступ к электронной библиотеке с тысячами книг, журналов и научных публикаций.
                  Читатели библиотеки получают бесплатный доступ к цифровым ресурсам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Можно ли записаться на мероприятие?
                </AccordionTrigger>
                <AccordionContent>
                  Да, на большинство мероприятий требуется предварительная регистрация. Вы можете записаться онлайн в
                  разделе "События" или по телефону. Некоторые события доступны для свободного посещения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Есть ли в библиотеке Wi-Fi?
                </AccordionTrigger>
                <AccordionContent>
                  Да, во всех помещениях библиотеки доступен бесплатный Wi-Fi. Также у нас есть компьютерная зона для
                  работы с документами и поиска информации.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Можно ли привести ребенка?
                </AccordionTrigger>
                <AccordionContent>
                  Конечно! У нас есть специальная детская секция с книгами для разных возрастов, игровая зона и
                  регулярные мероприятия для детей. Мы рады юным читателям и их родителям.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Есть вопросы?</h2>
              <p className="text-muted-foreground">
                Напишите нам, и мы обязательно вам ответим в ближайшее время
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Имя
                      </label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Тема
                    </label>
                    <Input id="subject" placeholder="Тема обращения" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea id="message" placeholder="Ваше сообщение" rows={5} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
