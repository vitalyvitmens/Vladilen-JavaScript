1. git status - глянуть статус, показывает что у нас сейчас происходит в рабочем дереве гита, дает более оперативную инфу чем VS-code
2. git add [files] || git add [folder] || git add . - добавляет файлы в stage (этап = промежуточная область)
3. git commit -m "comment" - закомитить файлы добавленные в stage (этап = промежуточная область)
4. git commit -m "comment" -a || git commit -m "comment" --all - закоммитить всё что у нас есть
5. git log - глянуть подробную инфу (логи) о наших коммитах, на каком комите находимся, где у нас находится main ветка. Клавиша q - выйти из git log
6. git log --oneline - глянуть краткие логи коммитов (id коммита + название коммита)
7. git config user.name - глянуть автора
8. git config user.email - глянуть почту автора
9. git remote -v - узнать есть ли удаленный репозиторий
10. git remote origin url - привязать локальный гит к удаленному (github) гиту
11. git push [rep_link] [branch_name] || git push
- [rep_link] = git remote -v = origin = https://github.com/vitalyvitmens/Vladilen-JavaScript
- [branch_name] = git branch = main
- gip push origin main
12. git reset [files] - что бы убрать со stage определенный файл 
13. git diff - посмотреть изменения
14. git reset --hard - уберет все изменения и вернет то что было до последнего push
15. git restore [files] - уберет все изменения в файле и вернет то что было до последнего коммита в этой ветке
16. git restore --staged [file] - выбросит файл из коммита

### Правильное оформление коммитов https://www.conventionalcommits.org/en/v1.0.0/
1. В терминале открываем терминал powershell || bash || zsh и пишем команду: git commit -a
2. В открывшемся новом окне редактора кода пишем коммит состоящий из header body footer:

fix(Module1_Basic_JavaScript\Git\README): изменяет текст

В мидл курсе вскрылись новые способности Git

https://www.conventionalcommits.org/en/v1.0.0/

3. Что бы редактор кода открывался в новом окне после команды git commit -a, настраиваем редактор запуском команды в терминале:
git config --global core.editor "code --wait -n"

### Откатить commit например если забыл создать файл .gitignore и сдуру запушил лишнего
1. git rm -rf --cached .
2. git add .
3. git commit -m "fix gitignore"

### Что бы git перестал отслеживтаь какой то файл
1. git rm --cached [files]

### Что бы сохранить наши изменения и временно работать на версии кода без этих изменений
1. git add . - добавляем все наши изменения
2. git stash - убирает (откатывает) наши изменения в stash (временное хранилище куда можно перевести все отслеживаемые файлы, перед этим их обязательно нужно добавить при помощи git add .)
3. git stash list - что бы заглянуть внутрь stash (временного хранилища)
4. git stash pop - возвращает наши изменения, вытаскиваем последнюю запись из stash, что бы их закомитить после вытаскивания используй команду git add .
5. git stash pop - удалить из stash последнюю запись
6. git stash drop - удалить все записи из stash
7. git stash apply - применить изменения не удаляя изменения из stash
8. git stash apply stash@{0} - применить нулевую запись находящуюся в stash, перед этим посмотри идентификатор нужной записи (stash@{0}) при помощи команды git stash list


### Редактирование коммитов в том числе ошибочных коммитов
1. git commit --amend - флаг --amend позволяет как то поменять коммит + может менять и код вместе с изменением коммита, но он годится только для одного разработчика, разрабатывающего только на одном компьютере
2. git commit --amend --no-edit - меняет код без изменения названия коммита, но он годится только для одного разработчика, разрабатывающего только на одном компьютере
3. git log - посмотреть успешность изменения коммита и др инфу, обрати внимание хэш коммита тоже меняется, поэтому это не годится для коммандной разработки или одиночной, но на нескольких устройствах

#### Создание веток
1. git branch - проверяем сколько у нас веток и какие
2. git branch develop - создаём ветку develop для разработки
3. git branch feature/main-page - создаём ветку main-page для разработки главной страницы
4. git branch feature/about-company - создаём ветку about-company страница о компании
5. git checkout develop - переход на ветку develop
6. git branch - проверяем сколько у нас веток и какие * зеленый цвет - на какой ветке находимся
7. git push [rep_link] [branch_name] (git push origin develop) - запушить коммит с другой ветки. Чтобы глянуть [rep_link] [branch_name] используй команду git remote -v
8. git checkout -b develop origin/develop - pull ветки develop с удаленного репозитория и переход на нее

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

#### Решение конфликтов при слиянии веток
1. git branch - проверяем сколько у нас веток и какие
2. git branch feature/user-access - создаем новую ветку feature/user-access
3. git branch - проверяем сколько у нас веток и какие
4. git checkout feature/user-access - переходим на ветку feature/user-access и создаем там новую фичу и коммитим изменения:
- git add .
- git commit -m "first commit in branch feature/user-access" 
5. git checkout main - переходим на главную ветку main и создаем там новую фичу (как будто два разработчика одновременно написали похожий код в тех же строках но в разных ветках) и коммитим изменения:
- git add .
- git commit -m "add data in branch main" 
6. git marge feature/user-access - пытаемся смерджить (слить) ветку feature/user-access в main, но появляются конфликты, фиксим их:
- Accept Current Change - принять изменения из ветки main
- Accept Incoming Change - принять изменения из ветки feature/user-access
- Accept Both Changes - принять изменения из обоих веток
7. Коммитим изменения:
- git status
- git add .
- git commit -m "add data in branch main" 
- git push origin main - пушим изменения на удаленный репозиторий (в нашем случае GitHub)
8. git branch -d feature/user-access - удаляем локально ветку feature/user-access
9. git branch - проверяем сколько у нас веток и какие
