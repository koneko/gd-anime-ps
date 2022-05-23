const base = "http://localhost:3000"
function base64_encode (data) {
    let buff = new Buffer(data).toString('base64')
    console.log(buff)
}
console.log("First line is boomlings server, second line is private server, change the base to the one you want to use.")
console.log("--------------------------------------------------------------------------------")
console.log("downloadGJLevel22.php")
console.log("--------------------------------------------------------------------------------")
base64_encode("http://www.boomlings.com/database/downloadGJLevel22.php")
base64_encode(base + "/thedatabase/downloadGJLevel22.php")
console.log("--------------------------------------------------------------------------------")
console.log("--------------------------------------------------------------------------------")
console.log("getGJLevels21.php")
console.log("--------------------------------------------------------------------------------")
base64_encode("http://www.boomlings.com/database/getGJLevels21.php")
base64_encode(base + "/thedatabase/getGJLevels21.php")
console.log("--------------------------------------------------------------------------------")
