
const passwordGenerator = () =>{
    let passwordLegnth = 8;
    let lowerCase = "abcdefghijklmnopqrstuvxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    let symbols = "!@#$%^&*(){}[]?<>";
    let allCharacters = lowerCase + upperCase + symbols;
    let password = "";
    for(let i = 0; i < passwordLegnth; i++){
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    console.log(password);
}

passwordGenerator();