const paths = {
  akbPath: process.env.AKB_XML_PATH,
  abPath: process.env.AB_XML_PATH,
};

const akbModificationValues = [
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
];

const abModificationValues = [
  {
    path: "root.die[0].swept[0].$.ip",
    value: process.env.IP_ADDR,
  },
];

module.exports = {
  paths,
  akbModificationValues,
  abModificationValues,
};
