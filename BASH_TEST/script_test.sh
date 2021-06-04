#!/bin/sh
# h2t, convert all htm and html files of a directory to text 


# for file in `ls *.html`
# do
# new=`basename $file html`
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=1-Chronicles-16-8.png 1-Chronicles-16-8.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22-10.png Revelation-22-10.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--11.png Revelation-22-11.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--12.png Revelation-22-12.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--13.png Revelation-22-13.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--14.png Revelation-22-14.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--15.png Revelation-22-15.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--16.png Revelation-22-16.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--17.png Revelation-22-17.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--18.png Revelation-22-18.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--19.png Revelation-22-19.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--20.png Revelation-22-20.html
/usr/lib/chromium/chromium --headless --disable-gpu --virtual-time-budget=5000 --window-size=296,444 --screenshot=Revelation-22--21.png Revelation-22-21.html


# done 

# --screenshot=[$file > ${new}png]


# run from command line like this:
# script_test.sh
# chmod +x script_test.sh
# bash script_test.sh

# firefox -P my-profile --screenshot test.jpg  https://developer.mozilla.org --window-size=800,1000


# /usr/bin/chromium
