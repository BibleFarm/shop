@echo off

@echo off

FOR /F "delims=	 tokens=1,2,*" %%A IN (wine_small_test_of_1396_verses_to_generate_images_296x444.txt) DO  start /wait google-chrome --headless --disable-gpu --print-to-pdf %%A.html %%A-mug.png

echo I did it!
@pause


