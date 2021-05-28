@echo off

FOR /F "delims=	 tokens=1,2,*" %%A IN (wine_small_test_of_1396_verses_to_generate_images.txt) DO "bin\wkhtmltoimage.exe" --javascript-delay 2000 --encoding utf-8 --enable-local-file-access --quality 50 --width 1200 --height 630 %%A.html %%A-mug.png

echo I did it!
@pause

