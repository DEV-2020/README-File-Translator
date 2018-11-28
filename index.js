const fs = require("fs");
const translate = require("translate");

translate.engine = "yandex";
translate.key = "trnsl.1.1.20181128T140131Z.b1a8bb247c8d7e15.1a3c0b64a7b1dd56405abb624c13198756b357ab";

function translateFile(filepath, lang) {
    fs.readFile(filepath, 'utf8', (err, content) => {
        translate(content, lang).then(text => {
            fs.writeFile(`README-${lang}.md`, text, (err) => {
                if (err) throw err;

                console.log(`File sucessfully translated and now under the name of README-${lang}.md`);
            });
        });
    });
}

translateFile('./README.md', 'fr');