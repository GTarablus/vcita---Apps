const { httpService } = require('./httpService');

export const reportService = {
  getCount,
};

function getCount(type) {
  return httpService.get(`${type}`);
}
