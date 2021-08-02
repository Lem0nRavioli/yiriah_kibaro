import './Reports.css';

const Reports = (reports) => {
    return ( 
        <div className="reports">
            {reports.map(report => (
                <p>report id: { report.reportId }</p>
            ))}
        </div>
     );
}
 
export default Reports;