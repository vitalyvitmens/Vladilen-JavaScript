1. git status - глянуть статус
2. git add [files] || git add . - добавляет файлы в stage (этап = промежуточная область)
3. git commit -m "comment" - закомитить файлы добавленные в stage (этап = промежуточная область)
4. git log - глянуть подробную инфу (логи) о наших коммитах
5. git log --oneline - глянуть краткие логи коммитов (id коммита + название коммита)
6. git config user.name - глянуть автора
7. git config user.email - глянуть почту автора
8. git remote -v - узнать есть ли удаленный репозиторий
9. git remote origin url - привязать локальный гит к удаленному (github) гиту
10. git push [rep_link] [branch_name] || git push
- [rep_link] = git remote -v = origin = https://github.com/vitalyvitmens/Vladilen-JavaScript
- [branch_name] = git branch = main
- gip push origin main
11. git reset [files] - что бы убрать со stage определенный файл 
12. git diff - посмотреть изменения
13. git reset --hard - уберет все изменения и вернет то что было до последнего push
### Откатить commit например если забыл создать файл .gitignore и сдуру запушил лишнего
14. git rm -rf --cached .
15. git add .
16. git commit -m "fix gitignore"

#### Создание веток
1. git branch - проверяем сколько у нас веток и какие
2. git branch develop - создаём ветку develop для разработки
3. git branch feature/main-page - создаём ветку main-page для разработки главной страницы
4. git branch feature/about-company - создаём ветку about-company страница о компании
5. git checkout develop - переход на ветку develop
6. git branch - проверяем сколько у нас веток и какие * зеленый цвет - на какой ветке находимся
7. git push [rep_link] [branch_name] (git push origin develop) - запушить коммит с другой ветки. Чтобы глянуть [rep_link] [branch_name] используй команду git remote -v

#### Слияние веток при помощи действия pull request - делается через GitHub https://lk.result.school/pl/teach/control/lesson/view?id=268066813&editMode=0

#### Слияние веток при помощи команды git merge
1. git branch - проверяем сколько у нас веток и какие
2. git branch test - создаём ветку develop для разработки
3. git branch -d test - удалить ветку test
4. git branch feature/main-page - создаем ветку для разработки главной страницы
5. git checkout feature/main-page - переходим на ветку для разработки главной страницы и создаем изменения
6. git checkout main - возвращаемся на ветку main !!! обязательно !!!
7. git merge feature/main-page - указываем название ветки (feature/main-page) чей код мы хотим переместить в нашу главную ветку main, после этого изменения из ветки feature/main-page отобразятся на главной ветке main
8. git push origin main - пушим изменения на удаленный репозиторий (в нашем случае GitHub)
9. git branch -d feature/main-page - удаляем локально ветку feature/main-page
10. Так же необходимо удалить ветку в удаленном репозитории (в нашем случае GitHub). Для этого переходим в секцию branches и в блоке Your branches напротив feature/main-page нажимаем кнопку delete, так же есть возможность ее восстановить если нажать кнопку Restore
11. git branch - проверяем сколько у нас веток и какие
