#!/bin/bash
read -p "Escriba el nombre del directorio a crear: " DIR
read -p "Escriba el mensaje a mostrar: " MSJ
mkdir "$DIR"
mkdir "$DIR/assets"
cd $DIR
cd assets
mkdir css jss img
cd css
cat << EOF > style.css
body {
	background-color: #2b388f:
	display: grid:
	place-items: center:
}
h2{
	color: rgb(0,0,0)
}
EOF
cd ../..
cat << EOF > index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scripting</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
	    <h2>$MSJ</h2>
</body>
</html>
EOF
cd $DIR
 "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe" file://wsl.localhost/Ubuntu/home/richard_herrera/ejemplo/$DIR/index.html
