@echo off

FOR /F "delims=	 tokens=1,2,*" %%A IN (D:\Github\local-shop\data_files\1396_verses_to_generate_images.txt) DO "D:\Github\local-shop\bin\wkhtmltoimage.exe" --javascript-delay 2000 --encoding utf-8 --enable-local-file-access --quality 50 --width 1200 --height 630 D:\Github\local-shop\Output_Generated_pages_for_images_1Ch2126toEnd\%%A.html D:\Github\local-shop\Output_Generated_Images_Mugs\%%A-mug.png

echo I did it!
@pause

