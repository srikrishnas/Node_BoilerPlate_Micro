
const { tableName }= require('../../models');


const getAllData = () => {
    return tableName.findAll({
      where: {
        id: 1,
      },
      raw: true,
    }).catch((error) => console.log("ERROR::::::",error));
  };


module.exports = { getAllData }