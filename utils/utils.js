const xml2js = require("xml2js");
const fs = require("fs");
const _ = require("lodash");

const parseXML = async ({ filePath }) => {
  const parser = new xml2js.Parser({ trim: true });
  return await new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err.message);
      }
      parser
        .parseStringPromise(data)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          console.error(err.message);
        });
    });
  });
};

const setXMLAttributes = (xmlObject, elementsToBeReplaced) => {
  const newObj = _.clone(xmlObject);
  elementsToBeReplaced.forEach((element) => {
    _.set(newObj, element.path, element.value);
  });
  return newObj;
};

const writeExistingFile = async ({ path, content }) => {
  // console.log("content: ",content)
  await fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
};

module.exports = {
  parseXML,
  setXMLAttributes,
  writeExistingFile,
};
