const modificationValues = {
  AKB: [
    {
      path: "root.women",
      value: "wizard",
    },
    {
      path: "root.crop",
      value: "none",
    },
    {
      path: "root.practical[0].$.id",
      value: process.env.AKB_ID,
    },
    {
      path: "root.case[0].$.ip",
      value: process.env.IP_ADDR,
    },
    {
      path: "root.network[0].$.cast_ip",
      value: process.env.MULTICAST_IP_ADDR,
    },
  ],
  AB: [
    {
      path: "root.die[0].swept[0].$.ip",
      value: process.env.IP_ADDR,
    },
  ],
};

const xmlFileInfo = {
  AKB: {
    path: process.env.AKB_XML_PATH,
    modificationValues: modificationValues.AKB,
    successMessage: "akb modification completed successfully",
  },
  AB: {
    path: process.env.AB_XML_PATH,
    modificationValues: modificationValues.AB,
    successMessage: "ab modification completed successfully",
  },
};

module.exports = {
  xmlFileInfo,
};
