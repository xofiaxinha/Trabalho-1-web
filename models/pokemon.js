module.exports = (sequelize, DataTypes) => {
    const Pokemon = db.define('Pokemon', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Pokemon;
}