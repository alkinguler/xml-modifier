const xml2js = require("xml2js");
const {
  parseXML,
  writeExistingFile,
  setXMLAttributes,
} = require("./utils/utils");
const { xmlFileInfo } = require("./constants/constants");

const parseAndReplaceFile = async (path, properties) => {
  const parsedXml = await parseXML({ filePath: path });
  const builder = new xml2js.Builder();
  const modifiedXml = setXMLAttributes(parsedXml, properties);

  await writeExistingFile({
    content: builder.buildObject(modifiedXml),
    path: path,
  });
};

const main = () => {
  const willBeProcessedFiles = Object.values(xmlFileInfo);

  willBeProcessedFiles.forEach((fileInfo) => {
    parseAndReplaceFile(fileInfo?.path, fileInfo?.modificationValues)
      .then(() => {
        console.log(fileInfo?.successMessage);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

main();
