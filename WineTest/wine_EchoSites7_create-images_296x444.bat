@echo off

FOR /F "delims=	 tokens=1,2,*" %%A IN (wine_small_test_of_1396_verses_to_generate_images_296x444.txt) DO "\usr\bin\google-chrome" google-chrome --headless --disable-gpu --screenshot=filename.png --virtual-time-budget=5000 --window-size=296,444 %%A.html %%A-mug.png

echo I did it!+++
@pause

rem google-chrome --headless --disable-gpu --screenshot=filename.png --virtual-time-budget=5000 --window-size=296,444 file:///media/demo/ALL-DATA/Github/shop/WineTest/Revelation-22-21.html


#!/bin/sh
# h2t, convert all htm and html files of a directory to text 

for file in `ls *.htm`
do
new=`basename $file htm`
lynx -dump $file > ${new}txt 
done
#####
for file in `ls *.html`
do
new=`basename $file html`
lynx -dump $file > ${new}txt 
done



Command Line	/usr/lib/chromium/chromium --show-component-extension-options --enable-gpu-rasterization --no-default-browser-check --disable-pings --media-router=0 --enable-remote-extensions --load-extension --flag-switches-begin --flag-switches-end --file-url-path-alias=/gen=/usr/lib/chromium/gen https://example.com
Executable Path	/usr/lib/chromium/chromium


2021-05-26####