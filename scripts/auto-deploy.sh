#
git checkout deploy
git merge master
yarn build
git add . && git commit -am "[$(date +"%Y-%m-%d %T")] deploy new version"
git push
git checkout master
