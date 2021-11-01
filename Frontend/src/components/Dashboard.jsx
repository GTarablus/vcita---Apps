import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountOfReports } from '../store/actions/reportActions';
import { Loading } from './Loading';
export const DashBoard = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reportModule);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getCountOfReports(type));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h4>Number of {type} reports</h4>
      <h5>{reports[type] ? reports[type] : <Loading />}</h5>
    </div>
  );
};
