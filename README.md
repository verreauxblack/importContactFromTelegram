# importContactFromTelegram
How to convert the Json file to .vcf / vCard file by using JS


STEP :1  (use step 1.1 or step 1.2)

STEP 1.1: If you download Json File from telegram then use "contacts.js" file to convert vcf file.

          Note:In this line "fs.readFile('./contacts.json', 'utf-8', (err, jsonString)=>{"  , "./contacts.json" is the json file path. you must change this line according to your json file path & name.

OR
STEP 1.2 :
STEP 1.2.1:  If you downloaded html file from telegram then convert this html file to json file by using online convertor.
           here is the link for online convertor : https://toolslick.com/conversion/data/html-to-json
           
STEP 1.2.2: Then delete the first 55 lines and delete the respective closing brackects.
             Given is the deleted code.
   |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |         {                                                                                                                                                                           |
   |               "#comment": "",                                                                                                                                                       |
   |               "html": {                                                                                                                                                             |
   |                 "#comment": "",                                                                                                                                                     |
   |                 "head": {                                                                                                                                                           |
   |                   "meta": [                                                                                                                                                         |
   |                     {                                                                                                                                                               |
   |                       "@charset": "utf-8"                                                                                                                                           |
   |                     },                                                                                                                                                              |
   |                     {                                                                                                                                                               |
   |                       "@content": "width=device-width, initial-scale=1.0",                                                                                                          |
   |                       "@name": "viewport"                                                                                                                                           |
   |                     }                                                                                                                                                               |
   |                   ],                                                                                                                                                                |
   |                   "title": "Exported Data",                                                                                                                                         |
   |                   "link": {                                                                                                                                                         |
   |                     "@href": "../css/style.css",                                                                                                                                    |
   |                     "@rel": "stylesheet"                                                                                                                                            |
   |                   },                                                                                                                                                                |
   |                   "script": {                                                                                                                                                       |
   |                     "@src": "../js/script.js",                                                                                                                                      |
   |                     "@type": "text/javascript"                                                                                                                                      |
   |                   }                                                                                                                                                                 |
   |                 },                                                                                                                                                                  |
   |                 "body": {                                                                                                                                                           |
   |                   "@onload": "CheckLocation();",                                                                                                                                    |
   |                   "div": {                                                                                                                                                          |
   |                     "@class": "page_wrap",                                                                                                                                          |
   |                     "div": [                                                                                                                                                        |
   |                       {                                                                                                                                                             |
   |                         "@class": "page_header",                                                                                                                                    |
   |                         "a": {                                                                                                                                                      |
   |                           "@class": "content block_link",                                                                                                                           |
   |                           "@href": "../export_results.html",                                                                                                                        |
   |                           "@onclick": "return GoBack(this)",                                                                                                                        |
   |                           "div": {                                                                                                                                                  |
   |                             "@class": "text bold",                                                                                                                                  |
   |                             "#text": "Contacts"                                                                                                                                     |
   |                           }                                                                                                                                                         |
   |                         }                                                                                                                                                           |
   |                       },                                                                                                                                                            |
   |                       {                                                                                                                                                             |
   |                         "@class": "page_body list_page",                                                                                                                            |
   |                         "div": [                                                                                                                                                    |
   |                           {                                                                                                                                                         |
   |                             "@class": "page_about details",                                                                                                                         |
   |                             "br": [                                                                                                                                                 |
   |                               "",                                                                                                                                                   |   
   |                               ""                                                                                                                                                    |
   |                             ],                                                                                                                                                      |
   |                             "#text": [                                                                                                                                              |
   |                               "If you allow access, your contacts are continuously synced with Telegram. Thanks to this, you can easily switch to Telegram and                      |
   |                                 immediately connect with friends across all your devices. We use data about your contacts to let you know when they join Telegram,                  |
   |                                 and to display them by the name you set for them in your phone.",                                                                                   |
   |                               "You can disable contact syncing or delete your stored contacts in Settings > Privacy & Security on Telegram's mobile apps."                          |
   |                            ]                                                                                                                                                        |
   |                           },                                                                                                                                                        |         
   |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|                         
                              
 STEP 1.2.3: After deleting the lines from coverted json, use "Json2vcard_html_convertor.js" file to convert vcf file.
 
             Note: (for step 1.2) In this line "fs.readFile('./filename.json', 'utf-8', (err, jsonString)=>{" ,  "./filename.json" is the json file path. you must change this line according to your json file path & name.
