const express = require("express")
const app = express()
const gogo = require("./gogo.js")
const body_parser = require("body-parser")
const fs = require("fs")

app.post("/thedatabase/getGJDailyLevel.php", (req, res) => {
    console.log("pinged")
    res.send("1|10000")
})

app.post("/thedatabase/getGJUsers20.php", (req, res) => { //1:RobTop:2:16:13:3:17:130:6::9:143:10:6:11:3:14:0:15:2:16:71:3:2180:8:0:4:5#999:0:10
    console.log("pinged gjusers20")
    res.send("1:Koneko:2:16:13:5:17:130:6::9:143:10:6:11:3:14:0:15:2:16:71:3:6942069:8:15:4:5#999:0:10")
})

app.post("/thedatabase/getGJUserInfo20.php", (req, res) => { // 1:RobTop:2:16:13:3:17:130:10:6:11:3:3:2180:46:1786:4:5:8:0:18:2:19:1:50:0:20:UCz_yk8mDSAnxJq0ar66L4sw:21:143:22:158:23:106:24:118:25:92:26:65:28:1:43:67:48:1:30:225134:16:71:31::44:RobTopGames:45:robtopgames:49:2:29:1
    console.log("pinged gjuserinfo")
    res.send("1:Koneko:2:16:13:3:17:130:10:6:11:3:3:2180:46:1786:4:5:8:15:18:2:19:1:50:0:20:a:21:143:22:158:23:106:24:118:25:92:26:65:28:1:43:67:48:1:30:1:16:71:31::44:RobTopGames:45:robtopgames:49:2:29:1")
})

app.post("/thedatabase/getGJLevels21.php", body_parser.urlencoded({ extended: false }), async (req, res) => {
    console.log("pinged gjlevels21")
    let str = req.body.str
    let result = await gogo.search(str)
    res.send(formulate(result[0].title, result[0].url))
})

app.post("/thedatabase/downloadGJLevel22.php", async (req, res) => {
    console.log("pinged downloadgjlevel22")
    res.send(fs.readFileSync("./sirius.txt", "utf8"))
})

app.get("/getGJDailyLevel.php", (req, res) => {
    res.send("running")
})


function formulate (name, url) {
    console.log(name)
    let text = "1:16560264:2:" + name + ":5:1:6:6824642:8:10:9:30:10:69:12:0:13:20:14:69:17:1:4:0:25::18:10:19:15820:42:0:45:0:4:RGVkaWNhdGVkIHRvIEZ1bm55R2FtZS4gRm9yIFZpcnBpbidzIENDIDYuIFBhc3Mgb24gbXkgdmlkZW8gOCkuLi4gRU5KT1khIChWZXJpZmllZCBieSBUb3hpYyk=:15:3:30:16339315:31:0:37:3:38:1:39:10:46:1:47:2:35:661012#6824642:Koneko:854523#1~|~661012~|~2~|~https://gogoanime.sk" + url + "~|~3~|~286~|~4~|~your mom~|~5~|~12.45~|~6~|~~|~10~|~http%3A%2F%2Faudio.ngfiles.com%2F661000%2F661012_Space-Battle.mp3~|~7~|~~|~8~|~1#1:0:10#3f57e12de30ab4b46cd2329d61c2067e35c00de3"
    return text
}
app.listen(3000, () => console.log("Server started"))