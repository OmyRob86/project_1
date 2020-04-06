#DIVERS
cd <chemin du fichier>  #desplazarse
node <nom du fichier>   #lanzar un script node

# GIT
git init                # inicializar un proyecto
git add <nom du fichier / dossier> #agregar las modoficaciones para el proximo commit
git commit -m '<mensaje que se agrega al commit>' # guardar las modif precedentes 
git status              # mostrar el estadod de mi proyecto git en este instante
git log                 # muestra el record de los commits 
git restore <nom du fichier / dossier> #restaura lo que quieras del ultimo commit
git branch <nom de la branch>  #crear una branch
git branch <nom de la branche> <branche a copier> #copier la brache desiganda dentri de una nueva rama (ex. git branch blabla origin/blabla)
git branch              # regresa a branch master
git checkout <nom du branche ou hash du commit>  #se desplaza a la cabeza de la lectura de la rama o id commit
git merge <nom de la branche> -m "<message du commit>" #fusiona la rama mencionanda al interior de la rama actual, creando un commit
git remote              #liste les depots distantes de notre projet
git remote add <nom du depot distant> <adresse du depot> #ajoute un nuveaur depot distant
git push                #envoie la brnche courante sur la branche distant du depot choisi
git push -u <nom de depot> <branche distant>   #idem, mais parametre la branche locale pour correspondre a la branch distante
git clone <adresse du depot> <nom du dossier>  #telecharge la branche par defaut du depot chosi dans le dossier voulu
git pull <nom du depot> <branche distant>  #met a jour la branche actuelle avec les modif effectués sur la branche distante



#EXTRAS

git log --pretty=online --graph


