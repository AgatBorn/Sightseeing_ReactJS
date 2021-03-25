import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'

import { getAllAttractionsRequest } from '../redux'

function AttractionsContainer(props) {
    useEffect(() => {
        props.getAttractions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    <div className="mt-3">
      {props.loading ?
      <div style={{textAlign: 'center'}}>
        <Spinner className="mt-5" animation="border" variant="primary" />
      </div>
      :
      <Container>
        <h2 style={{marginBottom: 30, textAlign: 'center'}}>List of attractions</h2>
        <Table striped bordered>
            <thead>
                <tr>
                <th> </th>
                <th>Name</th>
                <th>Category</th>
                <th>City</th>
                <th> </th>
                </tr>
            </thead>
            <tbody>
            {props.attractions.map((attraction, index) => (
                <tr key={attraction.id}>
                    <td>{index+1}</td>
                    <td>{attraction.name}</td>
                    <td>{attraction.attractionCategoryName}</td>
                    <td>{attraction.cityName}</td>
                    <td><Link to={`/attractions/${attraction.id}`}>Details</Link></td>
                </tr>
            ))}
            </tbody>
        </Table>
      </Container>
      }
    </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        attractions: state.attractions.listOfAttractions,
        loading: state.attractions.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAttractions: () => dispatch(getAllAttractionsRequest())
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (AttractionsContainer)