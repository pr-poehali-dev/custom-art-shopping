import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-orange-900 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full border-2 border-primary shadow-2xl animate-scale-in">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center animate-fade-in">
              <Icon name="CheckCircle2" size={60} className="text-gray-900" />
            </div>
          </div>
          <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
            Заказ принят!
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6 text-center">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-foreground font-medium">
              Ваш заказ успешно отправлен
            </p>
            <p className="text-lg text-muted-foreground">
              Художники получат уведомление и начнут работать над вашим проектом
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-2 border-orange-500/50">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Icon name="Clock" size={28} className="text-orange-400" />
              <p className="text-2xl font-bold text-orange-300">1-2 дня</p>
            </div>
            <p className="text-base text-orange-200">
              Ожидаемое время выполнения заказа
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3 text-left p-4 rounded-lg bg-card">
              <Icon name="Mail" size={24} className="text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Мы отправили подтверждение на ваш контакт
              </p>
            </div>
            <div className="flex items-center gap-3 text-left p-4 rounded-lg bg-card">
              <Icon name="Bell" size={24} className="text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Вы получите уведомление, когда художник примет заказ
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              onClick={() => navigate('/')}
              className="flex-1 h-14 text-lg gradient-primary hover:scale-105 transition-transform"
            >
              <Icon name="Home" className="mr-2" size={20} />
              Вернуться на главную
            </Button>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="flex-1 h-14 text-lg border-2 hover:scale-105 transition-transform"
            >
              <Icon name="Plus" className="mr-2" size={20} />
              Создать ещё заказ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSuccess;
