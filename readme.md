# Изучаем .Net Core (asp.net core 2  & EF Core) и Angular 4
## Делаем приложение, которое мониторит курс валют и дает совет, когда лучше ее закупать

1) Сначала устанавливаем:
    + visual studio 2017
    + .net core 2
    + node.js
    + angular cli
2) Создаем проекта используя template Angular (web -> asp.net core web application -> Angular)
   + ![screen1](http://www.aspnet.com.ua/111/gith/screen1.png)
   + в файле package.json изменяем версии наших зависимостей на последнею  (у меня это "~4.3.4"). Так же меняем везде значет ^ на ~
   + подтягиваем новые версии
   + в файле webpack.config.js  удаляем строку   new webpack.optimize.UglifyJsPlugin(),   **(лень разбираться чего не пашет)**
   
3) Добавляем проект для ORM (EF Core) "WebAspCore2.Data"   с типом  ->  Class Library (.Net Core)
    + Добавляем зависимость Microsoft.EntityFrameworkCore.SqlServer  
    + Создаем папку Models и в ней создаем class-ы , которые будут соответствовать таблице в базе данных
    + Создаем файл ConvertMoneyContext в нем делаем DbSet для наших таблиц. Если нужно сделать не логичные связи, то это пишем в методе OnModelCreating
    + добавлем проект WebAspCore2.Data в WebAspCore2
    + в проекте  WebAspCore2 в файле appsettings.json пописываем строку подключения к базе данных 
    + в проекте  WebAspCore2 открываем файл Startup и в метод ConfigureServices добавляем метод создания подключения к базе данных
    **(тут фигня, может потом уберу эту зависимость)**
    + делаем билд всему solution
    + создаем Migration-код. Для этого открываем командную строку и в папке WebAspCore2.Data вызываем команду:  dotnet ef --startup-project ../WebAspCore2/  migrations add InitialCreate
    
4) Создаем проект для Business Logic "WebAspCore2.BL"  с типом  ->  Class Library (.Net Core)
