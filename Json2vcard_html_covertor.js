var fs = require('fs');

fs.readFile('./kjcontact.json', 'utf-8', (err, jsonString)=>{
    if(err){
        console.log(err);
    }else{
        var content = JSON.parse(jsonString);
        //console.log(content.contacts.list[0].last_name);
        //var list = content.div[672].div[1].div[1]['text'];
        var list = content.div;
        var contact =[];
        //console.log(list);
        for(let i =0; i<list.length;i++){
            fs.appendFile('contacts.vcf', "BEGIN:VCARD" +"\n"+"VERSION:3.0"+"\n"+"FN:"+ list[i].div[1].div[1]['text']+"\n"+ "Tell:"+ list[i].div[1].div[2]['text']+"\n"+"END:VCARD"+"\n", {'flag':'a'}, function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            console.log(`Data written successfully! ${i}`);
            }
        }
});
          /*  contact.push("BEGIN:VCARD");
            contact.push("VERSION:3.0");
            contact.push(`FN:${list[i].div[1].div[1]['text']}`);
            contact.push(`Tell:${list[i].div[1].div[2]['text']}`);
            contact.push("END:VCARD");
            contact.join("\n");*/
        
       /* console.log("Going to write into existing file");
        for(let i = 0; i<contact.length;i++){
            
            // Open a new file with name input.txt and write Simply Easy Learning! to it.
            fs.appendFile('contacts.vcf', contact[i] + '\n', {'flag':'a'}, function(err) {
            if (err) {
                return console.error(err);
            }
            
            });
          //  console.log(arr);
        };
        console.log("Data written successfully!");
        console.log("Let's read newly written data");
        //console.log(contact);*/
        
       
   