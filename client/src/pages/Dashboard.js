import React from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
	const fetchData = async () => {
		try {
			
			const response = await fetch('/');
			console.log("Response: ",response);
			const data = await response.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return <h1>Dashboard</h1>;
};

export default Dashboard;
