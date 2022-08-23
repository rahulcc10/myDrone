module.exports = {
    updateBy: (schema, id, data) => {
      return new Promise(function (resolve, reject) {
        schema
          .findByIdAndUpdate(
            {
              _id: id,
            },
            data,
            {
              $new: true,
            }
          )
          .then((resData) => {
            resolve(resData);
          })
          .catch((error) => {
            console.log("error", error);
            reject(error);
          });
      });
    },

  };
  