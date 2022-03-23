// Database قاعدة البيانات
const chars = [
{ 1: "abcdefghijklmnopqrstuvwxyz"},
{ 2: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
{ 3: "0123456789"},
{ 4: "@#$%^&*()-=_+]}[{?><:;."}

];
// دالة generate
function generate() {
    let randomPassword = "";
    randomPassword = 
        randomPassword +
        chars[0]["1"].charAt(Math.floor(Math.random() * chars[0]["1"].length));

    randomPassword = 
        randomPassword +
        chars[1]["2"].charAt(Math.floor(Math.random() * chars[0]["2"].length));   

        randomPassword = 
            randomPassword +
            chars[2]["3"].charAt(Math.floor(Math.random() * chars[0]["3"].length));

            randomPassword = 
            randomPassword +
            chars[3]["4"].charAt(Math.floor(Math.random() * chars[0]["4"].length));

    console.log(randomPassword);        
    display.value = randomPassword;     
}