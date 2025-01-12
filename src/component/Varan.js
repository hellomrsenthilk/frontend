import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import "./styles.css";
import Navbar from '../Navbar';

function Varan() {

    const [varan, setVaran] = useState([]);
    const [search, setSearch] = useState('');
    const [field, setField] = useState('');

    console.log(search);

    useEffect(() => {

        axios.get('http://localhost:8089/viewVaran')
        .then(res => setVaran(res.data))
        .catch(err => console.log(err))
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8089/deleteVaran/'+id );
            window.location.reload();
        }catch(err) {
            if (err) console.log(err);
        }
    }

    return (
     <div>                 
       <Navbar/>
        <div className='d-flex vh-120 bg-primary justify-content-center align-items-center rounded-div'>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className='w-100 bg-white rounted p-3 rounded-div1'>
                <Container>  
                    <Form>
                    <InputGroup className="my-3">
                       
                    <table className='table' border={2} >
                        <thead>
                            <tr>
                                <th>Varan Name</th><th>Mobile</th><th>Email</th><th>Sex</th><th>Caste</th><th>Action</th>
                            </tr>
                            <tr>
                                <td align='left'>
                                <Form.Control onChange={ (e) => { setSearch(e.target.value); setField('name') }}
                                    className='bg-warning' placeholder="Search By Name"></Form.Control></td>
                                <td align='left'>
                                <Form.Control onChange={ (e) => { setSearch(e.target.value); setField('mobile') }}
                                    className='bg-warning' placeholder="Mobile"></Form.Control></td>
                                 <td align='left'>
                                <Form.Control onChange={ (e) => { setSearch(e.target.value); setField('email') }}
                                    className='bg-warning' placeholder="Email"></Form.Control></td>
                              <td align='left'>
                                <Form.Control onChange={ (e) => { setSearch(e.target.value); setField('sex') }}
                                    className='bg-warning' placeholder="Sex"></Form.Control></td>
                              <td align='left'>
                                <Form.Control onChange={ (e) => { setSearch(e.target.value); setField('caste') }}
                                    className='bg-warning' placeholder="Caste"></Form.Control></td>
                            <td align='left'>
                                <Form.Control onChange={ (e) => { setSearch(e.target.value); setField('isDeleted') }}
                                    className='bg-warning' placeholder="Action"></Form.Control></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                varan.filter(
                                    (item) => {
                                        if (field === 'name') {
                                            return search.toLowerCase() === '' ? item
                                            : item.name.toLowerCase().includes(search);
                                        }
                                        else if (field === 'mobile') {
                                            return search.toLowerCase() === '' ? item
                                            : item.mobile.toLowerCase().includes(search);
                                        }
                                        else if (field === 'sex') {
                                            return search.toLowerCase() === '' ? item
                                            : item.sex.toLowerCase().includes(search);
                                        }
                                        else if (field === 'caste') {
                                            return search.toLowerCase() === '' ? item
                                            : item.caste.toLowerCase().includes(search);
                                        }
                                        else {
                                            return search.toLowerCase() === '' ? item
                                            : item.email.toLowerCase().includes(search);
                                        }
                                    }
                                )
                                .map((data, i) => (
                                    <tr key={i}>
                                        <td align='left' width={300}> <b>{data.id  + ". "}</b> {data.name} (S/O) { data.fatherName} <br/>
                                            {data.dobStr}, {data.age}, {data.starTamil} , {data.raasiTamil} <br/> {data.placeOfBirth}, {data.nativity}   </td>
                                        <td align='left' width={100}> {data.mobileNo} <br/> Job: {data.job} </td> 
                                        <td align='left' width={150}> {data.email} <br/> Income: {data.income} </td> 
                                        <td align='left' width={75}> {data.sex} </td> 
                                        <td align='left' width={75}> {data.casteStr} <br/> {data.subCaste} </td> 
                                        <td width={250}>
                                             <Link  to={`viewVaran/${data.id}`} className='btn btn-primary'> &nbsp;View&nbsp; </Link>  &nbsp;
                                             <Link  to={`updateVaran/${data.id}`} className='btn btn-warning'> Update </Link> &nbsp;
                                             <button onClick={ e => handleDelete(data.id) }className='btn btn-danger' > Delete </button>
                                        </td>
                                    </tr> )
                                )
                            }
                        </tbody>
                    </table>
                    </InputGroup>
                    </Form>
                </Container>
            </div>
        </div>
    </div>
    )
}

export default Varan