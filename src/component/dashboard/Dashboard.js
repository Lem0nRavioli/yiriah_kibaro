import { useEffect, useState } from 'react';
import MapContainer from '../google/MapContainer';
import Reports from '../reports/Reports';
import './Dashboard.css'

const Dashboard = ( {serverAdress, userToken} ) => {
    const userId = userToken.data.userId;
    const accessToken = userToken.data.AccessToken;
    const endpoint = '/v1/kibaro/reports/users/';
    const adress = serverAdress + endpoint + userId;
    const [reports, setReports] = useState();

    useEffect(() => {
        fetch(adress, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + accessToken },
            })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('INVALID USER');
                } 
                return res.json();
            })
            // .then((response) => response.json())
            .then(data => {
                // DEFINE VALID USER HERE
                setReports(data.data.Reports);
            })
            .catch(err => {
                // DEFINE INVALID USER/PASS RESPONSE HERE
            console.log(err.message)
            })
            console.log('stop me!');
    }, [])

    return ( 
        <h2 className="dashboard">
            YOUR DASHBOARD HERE
            {/* FIX ITERATE THROUGH REPORT LIST */}
            {reports && <Reports reports={reports} />}
            {/* NEED A API KEY */}
            {/* <MapContainer /> */}
        </h2>
     );
}
 
export default Dashboard;