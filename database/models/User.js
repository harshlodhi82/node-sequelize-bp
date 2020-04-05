const Sequelize = require("sequelize")
const sequelize = require("../connection")

const userSchema =  (sequelize, DataTypes)=>{
    let User = sequelize.define("User",{
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: DataTypes.STRING(300)
    })

    User.associate = (models)=>{
        //apply joins here
    }

    return User
} 

const userModel = userSchema(sequelize, Sequelize);
module.exports = userModel