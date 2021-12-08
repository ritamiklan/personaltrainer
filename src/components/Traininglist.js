import React, { useState, useEffect } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@mui/material/Button';
import * as dayjs from 'dayjs';
import Addtraining from "./Addtraining";

export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const deleteTraining = (id) => {
        if (window.confirm('Are you sure?')) {
            fetch('https://customerrest.herokuapp.com/api/trainings/' + id, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }



    const saveTraining = (training) => {
        let temp = training
        temp.customer = "https://localhost:8080/api/customers/" + temp.customer;
        fetch('https://customerrest.herokuapp.com/api/trainings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(temp)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
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
            accessor: 'customer.firstname'
        },
        {
            accessor: 'customer.lastname'
        },
       
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'id',
            Cell: row => <Button onClick={() => deleteTraining(row.value)} color='error' size='small'>Delete</Button>
        }
    ]

    return (
        <div>
            <Addtraining saveTraining={saveTraining} />
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}