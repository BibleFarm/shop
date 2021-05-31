#!/bin/sh
# h2t, convert all htm and html files of a directory to text 


for file in `ls *.html`
do
new=`basename $file html`
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=${new}png $file html
done 

# --screenshot=[$file > ${new}png]


# run from command line like this:
# script_test.sh
# chmod +x script_test.sh
# bash script_test.sh

firefox -P my-profile --screenshot test.jpg  https://developer.mozilla.org --window-size=800,1000
