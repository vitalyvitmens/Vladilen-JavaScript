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
