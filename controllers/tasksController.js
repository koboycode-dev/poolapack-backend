const db = require("../database/models")

const common = async (req, res) => {
    try {
        const { user } = req.body

        /* input mengambil dari route hasil validasi 
           jadi di controller sudah bersih tidak ada logic pengecekan lagi
        */
        const rows = await db.Tasks.findAll({
            attributes: ['task'],
            where: {
                email: user
            },
            raw: true
        })
        
        // mapping array of object to array
        const maps = rows.map(function (item) {
            return item.task
        });

        // remove duplicate values
        const unique = [...new Set(maps)];

        res.status(200).json({
            task: unique
        })
    } catch (error) {
        res.json(error).status(500)
    }
}

module.exports = {
    common
}
