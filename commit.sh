#! /bin/sh
#
# commit.sh
# Copyright (C) 2019 lijiaocn <lijiaocn@foxmail.com>
#
# Distributed under terms of the GPL license.
#

cd ./_site
sed -i "" -e "s#http://localhost:4000#https://www.lijiaocn.com#g" ./sitemap.xml
sed -i "" -e "s#http://localhost:4000#https://www.lijiaocn.com#g" ./feed.xml
git add .
git commit -m "m"
git push 
