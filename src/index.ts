export const helloWorld = (req, res) => {
    console.log("Entered...!")
    let payload = { "msg": "Hello World..!" }
    res.status(200)
    res.send(payload).end()
}