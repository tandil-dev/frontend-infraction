export const reportInfractionType = 'REPORT-INFRACTION';

const reportInfraction = (payload) => ({
  type: reportInfractionType,
  payload,
});

export default reportInfraction;
