const xml2js = require("xml2js");
const {
  parseXML,
  writeExistingFile,
  setXMLAttributes,
} = require("./utils/utils");
const {
  paths,
  akbModificationValues,
  abModificationValues,
} = require("./constants/contants");

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
  const { akbPath, abPath } = paths;
  const willBeProcessedFiles = [
    {
      path: akbPath,
      successMessage: "akb modification completed successfully",
      properties: akbModificationValues,
    },
    {
      path: abPath,
      successMessage: "ab modification completed successfully",
      properties: abModificationValues,
    },
  ];

  willBeProcessedFiles.forEach((fileInfo) => {
    parseAndReplaceFile(fileInfo?.path, fileInfo?.properties)
      .then(() => {
        console.log(fileInfo?.successMessage);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

main();
