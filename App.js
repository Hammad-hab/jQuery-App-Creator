const fs = require("node:fs")

// const chalk = require("chalk")
const prompt = require('prompt-sync')();
const json = require("./App.json")
const project_name =  prompt(/*chalk.default.cyan(*/"Project-name: "/*)*/).trim()
var url = json.default ? (json.default) : prompt(/*chalk.default.blue(*/"Project URL: "/*)*/)
var newUrl = `${url}/${project_name}/${project_name}`
if (url.lastIndexOf("/")) {
    url[url.lastIndexOf("/")] = ""
}
var exe = ``
const markup ={ 
html: `
<!-- Created by jQuery App creator-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jquery-app</title>
    <link rel="stylesheet" href="${project_name}.css">
    ${exe}
</head>
<body>
<div id="root" class="box"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./${project_name}.js"></script>
</body>
</html>`,
js: `
/* Created by jQuery App creator */
$(document).ready(() => {
    $("#root").append("<b>I <strong>WORK</strong></b>")
})
`,
css: `
/* Created by jQuery App creator*/
.box {
    padding:20px;
    background-color: pink;
    width: 50px;
    height: 50px
}
`
}
for (let i = 0; i < json.use.length; i++) {
    const element = json.use[i];
    if (element.toLowerCase() === "bt" || element.toLowerCase() === "bootstrap") {
      exe += "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js'/>"
    } else if (element.toLowerCase() === "jqui" || element.toLowerCase() === "jquery_ui" ) {
      exe += "<script src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js'></script>"
    }
}
try {
    fs.mkdirSync(url + "/" + project_name)
    fs.writeFile(newUrl + `.html`,markup.html, () => {})
    fs.writeFile(newUrl + `.js`,markup.js, () => {})
    fs.writeFile(newUrl + `.css`,markup.css, () => {})
} catch (error) {
    console.log(error)
}


