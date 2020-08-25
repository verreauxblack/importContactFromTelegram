var fs = require('fs');

fs.readFile('./contacts.json', 'utf-8', (err, jsonString)=>{
    if(err){
        console.log(err);
    }else{
        var content = JSON.parse(jsonString);
        //console.log(content.contacts.list[0].last_name);

        var list = content.contacts.list;

        for(let i =0; i<list.length;i++){
            fs.appendFile('contacts1.vcf', "BEGIN:VCARD" +"\n"+"VERSION:3.0"+"\n"+"FN:"+ list[i].first_name + " "+ list[i].last_name+"\n"+ "Tell:"+list[i].phone_number +"\n"+"END:VCARD"+"\n", {'flag':'a'}, function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            console.log(`Data written successfully! ${i}`);
            }
    }
});


