import { reportService } from '../../services/reportService';

export function getCountOfReports(type) {
  return async (dispatch) => {
    try {
      const count = await reportService.getCount(type);
      type = type.toUpperCase();
      dispatch({ type: `SET_${type}`, count });
      // console.log('reportActions', count);
    } catch (err) {}
  };
}
