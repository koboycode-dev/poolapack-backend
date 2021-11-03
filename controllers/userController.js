const db = require("../database/models")

const register = async (req, res) => {
    try {
        const { Users } = req.body
        const paload = []

        // looping inputan array users untuk mebuat array object baru
        for (let index = 0; index < Users.length; index++) {
            usersObject = {
                email: Users[index]
            }
            paload.push(usersObject)
        }
        
        /* input mengambil dari route hasil validasi 
           jadi di controller sudah bersih tidak ada logic pengecekan lagi
        */
        const save = await db.Users.bulkCreate(paload, { returning: true })
        res.status(204).json(save)
    } catch (error) {
        res.json(error).status(500)
    }
}

const assign = async (req, res) => {
    try {
        const { user, tasks } = req.body
        const paload = []

        // looping inputan array task untuk mebuat array object baru
        for (let index = 0; index < tasks.length; index++) {
            console.log(tasks[index]);
            tasksObject = {
                email: user,
                task: tasks[index]
            }
            paload.push(tasksObject)
        }
        
        /* input mengambil dari route hasil validasi 
           jadi di controller sudah bersih tidak ada logic pengecekan lagi
        */
        const save = await db.Tasks.bulkCreate(paload, { returning: true })
        res.status(204).json(save)
    } catch (error) {
        res.json(error).status(500)
    }
}

const unassign = async (req, res) => {
    try {
        const { user, tasks } = req.body
        
        /* input mengambil dari route hasil validasi 
           jadi di controller sudah bersih tidak ada logic pengecekan lagi
        */
        const update = await db.Tasks.destroy({
            where: {
                email: user,
                task: tasks
            }
        })
        res.status(204).json(update)
    } catch (error) {
        res.json(error).status(500)
    }
}

module.exports = {
    register, assign, unassign
}
