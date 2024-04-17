import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import JobCard from './JobCard ';
const FetchJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dmyvar76hk.execute-api.ap-south-1.amazonaws.com/dsv/items ');
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className='jobHeading'>
                <h1>Job Post Everyday (0-2 years of experience)</h1>
            </div>

            <div className="job-board">
                {jobs.map((job) => (
                    <JobCard key={job.title} {...job} />
                ))}
            </div>
        </>
    )
}

export default FetchJobs