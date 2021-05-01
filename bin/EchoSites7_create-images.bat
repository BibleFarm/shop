FOR /F "delims=	 tokens=1,2,*" %A IN (C:\Users\admin-2020-07-23\Desktop\EchoSites7\EchoSites7_urls_and_refs_and_verse_text_small_sample.txt) DO wkhtmltoimage --encoding utf-8 --enable-local-file-access --quality 50 --width 1200 --height 630 C:\Users\admin-2020-07-23\Desktop\EchoSites7\Output_Generated_html_pages/%A.html C:\Users\admin-2020-07-23\Desktop\EchoSites7\Output_Generated_images\%B.png PAUSE


