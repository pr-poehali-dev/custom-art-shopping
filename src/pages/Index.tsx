import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const reviews = [
    {
      name: "Анна Петрова",
      avatar: "🎨",
      rating: 5,
      text: "Заказала портрет для подарка — получилось волшебно! Художник учёл все мои пожелания, цена просто смешная для такого качества.",
      role: "Покупатель"
    },
    {
      name: "Дмитрий Волков",
      avatar: "🖼️",
      rating: 5,
      text: "Работаю на платформе уже полгода. Удобная система оплаты, всегда получаю деньги вовремя. Клиенты адекватные, заказы интересные!",
      role: "Художник"
    },
    {
      name: "Елена Соколова",
      avatar: "✨",
      rating: 5,
      text: "Нужна была иллюстрация для книги срочно. Нашла художника за час, работу получила через 3 дня. Качество превзошло ожидания!",
      role: "Покупатель"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-gradient animate-fade-in">
                ArtSpace
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Творчество без границ и переплат
              </p>
            </div>
            
            <Button
              size="lg"
              onClick={() => setIsLoggedIn(true)}
              className="h-24 px-16 text-3xl font-bold rounded-3xl gradient-primary hover:scale-105 transition-transform shadow-2xl animate-scale-in"
            >
              <Icon name="Sparkles" className="mr-4" size={40} />
              Войти на платформу
            </Button>
            
            <div className="flex items-center justify-center gap-8 pt-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">20₽</div>
                <div className="text-sm text-muted-foreground">от</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">5000+</div>
                <div className="text-sm text-muted-foreground">художников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">24 часа</div>
                <div className="text-sm text-muted-foreground">в среднем</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-border">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gradient">ArtSpace</h1>
              
              <button
                onClick={() => setIsLoggedIn(false)}
                className="group relative w-16 h-16 hover:scale-110 transition-transform"
                aria-label="Выход"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-[6px] border-black" 
                       style={{ 
                         clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                         transform: 'rotate(45deg)'
                       }} 
                  />
                </div>
              </button>
            </div>
          </header>

          <main className="container mx-auto px-4 py-12 space-y-24">
            <section className="text-center space-y-6 animate-fade-in">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                🎨 Доступное искусство для каждого
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-gradient">
                Арт на заказ.<br />Просто. Быстро. Недорого.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Соединяем талантливых художников и тех, кто ценит уникальное творчество. 
                Без посредников, без переплат — только вы и искусство.
              </p>
            </section>

            <section className="space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold">О платформе</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Наша миссия — сделать искусство доступным каждому
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover-scale border-2 hover:border-primary transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-4xl mb-4">
                      💰
                    </div>
                    <CardTitle className="text-2xl">Честные цены</CardTitle>
                    <CardDescription className="text-lg">
                      От 20₽ за арт. Никаких скрытых комиссий и накруток. Художник получает 90% от суммы заказа.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-scale border-2 hover:border-secondary transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center text-4xl mb-4">
                      🛡️
                    </div>
                    <CardTitle className="text-2xl">Безопасно</CardTitle>
                    <CardDescription className="text-lg">
                      Деньги замораживаются до завершения работы. Защита покупателя и художника на каждом этапе.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-scale border-2 hover:border-accent transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-4xl mb-4">
                      ⚡
                    </div>
                    <CardTitle className="text-2xl">Быстро</CardTitle>
                    <CardDescription className="text-lg">
                      Средний срок выполнения заказа — 24 часа. Найдите художника и получите арт в день заказа!
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            <section className="space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold">Отзывы наших клиентов</h3>
                <p className="text-xl text-muted-foreground">
                  Более 10,000 довольных покупателей и художников
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <Card key={index} className="hover-scale bg-gradient-to-br from-white to-purple-50 border-2 hover:border-primary transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-3xl">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{review.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">{review.role}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="fill-accent text-accent" size={20} />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        "{review.text}"
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            <section className="space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h3 className="text-4xl font-bold">Создать заказ</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Опишите ваши требования и получите предложения от художников
                </p>
              </div>

              <Card className="max-w-2xl mx-auto border-2 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Форма индивидуального заказа</CardTitle>
                  <CardDescription className="text-base">
                    Заполните форму, и мы найдём лучших художников для вашего проекта
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="theme" className="text-base">Тема арта *</Label>
                    <Input id="theme" placeholder="Например: портрет, пейзаж, логотип..." className="h-12 text-base" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base">Подробное описание *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Опишите стиль, цвета, настроение, референсы..."
                      className="min-h-32 text-base"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-base">Бюджет (₽) *</Label>
                      <Input id="budget" type="number" placeholder="от 20" className="h-12 text-base" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline" className="text-base">Срок (дней)</Label>
                      <Input id="deadline" type="number" placeholder="3-7 дней" className="h-12 text-base" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-base">Контакт (email или Telegram) *</Label>
                    <Input id="contact" placeholder="@username или email@example.com" className="h-12 text-base" />
                  </div>

                  <Button className="w-full h-14 text-lg gradient-primary hover:scale-105 transition-transform">
                    <Icon name="Send" className="mr-2" />
                    Отправить заказ
                  </Button>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                      <div className="flex gap-3">
                        <Icon name="ShieldCheck" className="text-green-600 flex-shrink-0" size={24} />
                        <div className="space-y-1">
                          <p className="font-semibold text-green-900">Безопасная оплата</p>
                          <p className="text-sm text-green-700">
                            Средства защищены до полного завершения работы. Вы платите только после получения результата и подтверждения качества.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Icon name="CreditCard" className="text-blue-600" size={20} />
                          <p className="font-semibold text-blue-900">Способы оплаты</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
                            <Icon name="CreditCard" className="text-blue-600" size={24} />
                            <span className="text-sm font-medium text-blue-900">Банковская карта</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-colors">
                            <Icon name="Smartphone" className="text-blue-600" size={24} />
                            <span className="text-sm font-medium text-blue-900">СБП</span>
                          </div>
                        </div>
                        <p className="text-xs text-blue-700">
                          Принимаем все популярные карты: Visa, Mastercard, МИР. Моментальная оплата через Систему быстрых платежей.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="text-center space-y-8 py-12 animate-fade-in">
              <h3 className="text-4xl font-bold">Готовы начать?</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к тысячам довольных пользователей ArtSpace
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="h-16 px-12 text-xl gradient-primary hover:scale-105 transition-transform">
                  <Icon name="Brush" className="mr-2" size={24} />
                  Создать заказ
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-12 text-xl border-2 hover:scale-105 transition-transform">
                  <Icon name="Users" className="mr-2" size={24} />
                  Стать художником
                </Button>
              </div>
            </section>
          </main>

          <footer className="bg-gradient-to-br from-purple-100 to-pink-100 border-t border-border mt-24">
            <div className="container mx-auto px-4 py-12">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-gradient">ArtSpace</h4>
                <p className="text-muted-foreground">Доступное искусство для каждого</p>
                <div className="flex gap-6 justify-center items-center">
                  <Icon name="Mail" className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                  <Icon name="MessageCircle" className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                  <Icon name="Instagram" className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  © 2024 ArtSpace. Творим будущее вместе
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;