# Инструкции по деплою

## 🚀 Быстрый деплой

### GitHub Pages (Рекомендуется)
1. Перейдите в настройки репозитория на GitHub
2. Найдите раздел "Pages" в боковом меню
3. Выберите источник "Deploy from a branch"
4. Выберите ветку "main" и папку "/ (root)"
5. Нажмите "Save"
6. Сайт будет доступен по адресу: `https://sipanbabajanyan.github.io/partner-proposal/`

### Netlify
1. Зайдите на [netlify.com](https://netlify.com)
2. Нажмите "New site from Git"
3. Подключите GitHub репозиторий
4. Настройки деплоя:
   - Build command: (оставить пустым)
   - Publish directory: `/`
5. Нажмите "Deploy site"

### Vercel
1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите "New Project"
3. Импортируйте GitHub репозиторий
4. Настройки:
   - Framework Preset: Other
   - Build Command: (оставить пустым)
   - Output Directory: `/`
5. Нажмите "Deploy"

## 🔧 Локальная разработка

### Запуск локального сервера
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Открыть в браузере
```
http://localhost:8000
```

## 📝 Обновление сайта

### 1. Внесите изменения в код
### 2. Добавьте изменения в Git
```bash
git add .
git commit -m "Описание изменений"
```

### 3. Отправьте на GitHub
```bash
git push origin main
```

### 4. Сайт автоматически обновится (если используется GitHub Pages)

## 🌐 Настройка домена

### Для GitHub Pages
1. Создайте файл `CNAME` в корне репозитория
2. Добавьте ваш домен в файл:
   ```
   yourdomain.com
   ```
3. Настройте DNS записи у вашего провайдера

### Для Netlify/Vercel
1. В настройках проекта добавьте кастомный домен
2. Следуйте инструкциям для настройки DNS

## 📊 Мониторинг

### Google Analytics
1. Добавьте код отслеживания в `index.html` перед закрывающим тегом `</head>`
2. Замените `GA_TRACKING_ID` на ваш ID:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Google Search Console
1. Добавьте сайт в Google Search Console
2. Подтвердите владение через HTML файл или DNS
3. Отправьте sitemap.xml

## 🔒 SSL сертификат
- GitHub Pages, Netlify и Vercel автоматически предоставляют SSL
- Сайт будет доступен по HTTPS

## 📱 Тестирование
1. Проверьте на разных устройствах
2. Используйте инструменты разработчика браузера
3. Протестируйте скорость загрузки на [PageSpeed Insights](https://pagespeed.web.dev/)

## 🆘 Поддержка
При возникновении проблем:
1. Проверьте логи деплоя
2. Убедитесь, что все файлы загружены
3. Проверьте настройки DNS
4. Обратитесь к документации хостинга
