import './Reports.css';

const Reports = (reports) => {
    console.log(reports)
    return ( 
        <div className="reports">
            {reports.reports.map(report => (
                <div className="report-preview" key={report.reportId}>
                    <p>report id: { report.reportId }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Reports;