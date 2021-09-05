const { stringify } = require("javascript-stringify");

const isolateModule = (_, content) =>
  `export default ${stringify(content, null, 2)}`;

const libModule = (iconName, content) => `\nexport function ${iconName}(props) {
  return IconWrapper({src: ${stringify(content, null, 2)}, ...props})
}`;

module.exports = {
  isolateModule,
  libModule,
};
