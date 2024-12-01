import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './Dashboard.css';

const mockData = {
  followers: [120, 150, 180, 210, 230, 260, 280],
  likes: [300, 320, 290, 350, 370, 390, 400],
  comments: [10, 15, 20, 25, 30, 35, 40]
};

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Followers',
        data: mockData.followers,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Likes',
        data: mockData.likes,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'Comments',
        data: mockData.comments,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="dashboard">
      <h1>Social Media Dashboard</h1>
      <div className="chart-container">
        <Bar data={data} />
      </div>
      <div className="chart-container">
        <Line data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
