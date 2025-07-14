import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const carBrands = [
    'Toyota', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Ford', 'Chevrolet', 'Nissan', 'Honda', 'Hyundai'
  ];

  const categories = [
    { id: 1, name: 'Двигатель', icon: 'Settings', count: '2,834' },
    { id: 2, name: 'Тормозная система', icon: 'Circle', count: '1,245' },
    { id: 3, name: 'Подвеска', icon: 'Wrench', count: '987' },
    { id: 4, name: 'Трансмиссия', icon: 'Cog', count: '756' },
    { id: 5, name: 'Электрика', icon: 'Zap', count: '1,432' },
    { id: 6, name: 'Кузов', icon: 'Car', count: '654' }
  ];

  const popularParts = [
    { id: 1, name: 'Тормозные колодки', price: '2,890', brand: 'Bosch', image: '/placeholder.svg' },
    { id: 2, name: 'Масляный фильтр', price: '450', brand: 'Mann', image: '/placeholder.svg' },
    { id: 3, name: 'Воздушный фильтр', price: '680', brand: 'Knecht', image: '/placeholder.svg' },
    { id: 4, name: 'Свечи зажигания', price: '1,200', brand: 'NGK', image: '/placeholder.svg' }
  ];

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">Django Parts</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Запчасти для любого автомобиля
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Найдите нужные запчасти для вашего автомобиля за несколько кликов
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Поиск запчастей</CardTitle>
                <CardDescription className="text-center">
                  Выберите марку и модель вашего автомобиля
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Марка автомобиля</label>
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите марку" />
                      </SelectTrigger>
                      <SelectContent>
                        {carBrands.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Модель</label>
                    <Select value={selectedModel} onValueChange={setSelectedModel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите модель" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="model1">Модель 1</SelectItem>
                        <SelectItem value="model2">Модель 2</SelectItem>
                        <SelectItem value="model3">Модель 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Поиск по названию</label>
                  <Input 
                    placeholder="Например: тормозные колодки, масляный фильтр..." 
                    className="h-12"
                  />
                </div>

                <Button className="w-full h-12 text-lg" size="lg">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти запчасти
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные категории</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={category.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{category.name}</h4>
                      <p className="text-gray-600">{category.count} товаров</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Parts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные запчасти</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularParts.map((part) => (
              <Card key={part.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Package" size={48} className="text-gray-400" />
                  </div>
                  <h4 className="font-semibold mb-2">{part.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">Производитель: {part.brand}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{part.price} ₽</span>
                    <Button size="sm" onClick={addToCart}>
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">Django Parts</h3>
              </div>
              <p className="text-gray-400">
                Надежные запчасти для вашего автомобиля с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Двигатель</a></li>
                <li><a href="#" className="hover:text-white">Тормозная система</a></li>
                <li><a href="#" className="hover:text-white">Подвеска</a></li>
                <li><a href="#" className="hover:text-white">Трансмиссия</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Доставка</a></li>
                <li><a href="#" className="hover:text-white">Оплата</a></li>
                <li><a href="#" className="hover:text-white">Гарантия</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@djangoparts.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 123
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Django Parts. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;