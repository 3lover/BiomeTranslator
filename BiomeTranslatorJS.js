const Tablebases = {
Default:{
a:"b", b:"c", c:"d", d:"e", e:"f", f:"g", g:"g", 
h:"i", i:"j", j:"k", k:"l", l:"m", m:"n", n:"o",
o:"p", p:"q", q:"r", r:"s", s:"t", t:"u", u:"v",
v:"w", w:"x", x:"y", y:"z", z:"a"
},
RString:{
    a:"o", b:"@", c:"#", d:"$", e:"%", f:"^", g:"&", 
    h:"*", i:"(", j:")", k:"_", l:"-", m:"+", n:"=",
    o:"`", p:"~", q:"d", r:":", s:">", t:"<", u:"y",
    v:"/", w:"q", x:"v", y:"z", z:"x"
    }
};


function getKeyByValue(object, value) {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
            return prop;
        }
    }
}
function convertLanguage(direction, string, database){
    let newString = ""
    if(!database){database = Tablebases.Default}
    for(let i = 0; i < string.length; i++){
        if (direction){
            if(string.charAt(i) in database){
                newString += database[string.charAt(i)]
            }
            else{
                newString += string.charAt(i)
            }
        };
        if (!direction){
            if(getKeyByValue(database, string.charAt(i))){
                newString += getKeyByValue(database, string.charAt(i))
            }
            else{
                newString += string.charAt(i)
            }
        };
    };
    document.getElementById("TranslatedDisplay").value = newString;

};
function copyOutput() {
    /* Get the text field */
    let copyText = document.getElementById("TranslatedDisplay");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }