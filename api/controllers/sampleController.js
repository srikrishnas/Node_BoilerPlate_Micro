
let getAllDataService = require('../service/sampleService.js')

sampleController = (req,res) => {
    console.log(req.body);
    getAllDataService.getAllData().then((result) => {
        console.log("RESULT FROM DB",JSON.stringify(result[0]))
        res.json({ status:200, data: result[0]})
    }).catch((err) => {
        console.log("ERROR::::::::",err)
        res.json({ status:200, data: err})
    });
    // res.json({ status:200})
}

module.exports = { sampleController }