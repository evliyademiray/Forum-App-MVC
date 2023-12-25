# MVC (Model View Controller)

# Model: 
Uygulamanın veri mantığını veya yapısını temsil eder.
-Örneğin: Bileşende tutulacak state'in başlangıç değeri
-Veriyi formatlamaya yarayan fonksiyonlar
-API işlemleri tutulabilir

# View: 
Son kullanıcının gördüğü tasarım.
-Bileşenlerindeki return satırında yazdığımız JSX elementleri bu bileşende tanımlanır

# Controller
View ile Model arasındaki bağlantıyı sağlar
Kullanıcı etkileşimiyle tetiklenecek bütün fonksiyonlar burada tanımlanır

# MVC klasör yapısı 

# 1. Yol
-public
-src
--pages
---MainPage
----MainPageController
----MainPageViev
----MainPageModel

---Auth
----AuthPageController
----AuthPageView
----AuthPageModel

# 2.Yol
-public
-src

--models
---MainPageModel
---AuthPageModel

--views
---MainPageView
---AuthPageView

--controllers
---MainPageController
---AuthPageController
# Forum-App-MVC
