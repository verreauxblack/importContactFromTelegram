var vCard = require( 'vcf' );

//var card = new vCard().parse();

//This is the file first i tried.

//console.log(card);
var fs = require('fs');

fs.readFile('./contacts.json', 'utf-8', (err, jsonString)=>{
    if(err){
        console.log(err);
    }else{
        var content = JSON.parse(jsonString);
        //console.log(content.contacts.list[0].last_name);

        var list = content.contacts.list;
        var contact=[];
         list.forEach(element => {
            contact.push("BEGIN:VCARD");
            contact.push("VERSION:3.0");
            contact.push(`FN:${element.first_name} ${element.last_name}`);
            contact.push(`Tell:${element.phone_number}`);
            contact.push("END:VCARD");
        });
        contact.forEach(arr =>{
            console.log("Going to write into existing file");
            // Open a new file with name input.txt and write Simply Easy Learning! to it.
            fs.appendFile('contacts.vcf', arr +"\n", function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Data written successfully!");
            console.log("Let's read newly written data");
            });
          //  console.log(arr);
        });
       
        //console.log(list.length);
    }
});


