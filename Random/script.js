// project أنشئ كائن
const project = {
    type: "string",
    users: 10000000,
    biography() {
        return "ما ادري شنو اكتب هني";
    },
}
// randomProperty أنشئ دالة
function randomProperty(x) {
    const keyObject = Object.keys(x);
    const randomNumber = Math.floor(Math.random() * keyObject.length);
    console.log(keyObject[`${randomNumber}`]);
    console.log(x[`${keyObject[`${randomNumber}`]}`]);
}

randomProperty(project);