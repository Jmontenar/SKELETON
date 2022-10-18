//? Dependencies
const uuid = require('uuid')

const Users = require('../models/users.models')
const { hashPassword } = require('../utils/crypto')

const getAllUsers = async () => {
    const data = await Users.findAll({
        where: {
            status: 'active'
        }
    })
    return data
}

const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
            status: 'active'
        }
    })
    return data
}