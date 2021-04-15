#
<<<<<<< HEAD
=======
git checkout deploy
>>>>>>> master
git merge master
yarn build
git add . && git commit -am "[$(date +"%Y-%m-%d %T")] deploy new version"
git push
<<<<<<< HEAD
=======
git checkout master
>>>>>>> master
