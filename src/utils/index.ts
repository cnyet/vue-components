/**
 * @description 工具模块
 */
function getFileName (filName: string) {
  // eslint-disable-next-line
  const reg = /([^<>/\\\|:""\*\?]+)\.\w+$/;
  const match: RegExpMatchArray = filName.match(reg) || [];
  if (match[1]) {
    return match[1];
  }
  return '';
}

export default {
  getFileName
};