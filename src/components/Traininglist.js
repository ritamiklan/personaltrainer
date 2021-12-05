import React, { useState, useEffect } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as dayjs from 'dayjs';

export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    const [name, setName] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const displayCustomer = (link) => {
        fetch(link)
        .then(response => response.json())
        .then(data => setName(data.firstname))
        return name;
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: ({value}) => dayjs(value).format('DD/MM/YYYY')
        },
        {
            Header: 'Time',
            accessor: 'date',
            Cell: ({value}) => dayjs(value).format('HH.mm')
        },
        {
            Header: 'duration',
            accessor: 'duration',
            Cell: ({value}) =>  value + ' min'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customer',
            accessor: 'links[2].href',
            Cell: row => () => {displayCustomer(row.value)}
        }
    ]

    return (
        <div>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}