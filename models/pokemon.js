module.exports = (db, DataTypes) => {
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
    },
    {
        tableName: 'pokemons',  // Nome exato da tabela
        schema: 'public', 
    });
    return Pokemon;
}