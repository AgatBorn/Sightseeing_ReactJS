import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getAttractionDetailsRequest } from '../redux'

function AttractionDetailsContainer(props) {
    useEffect(() => {
        console.log(props.match.params.id)
        props.getDetails(props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="mt-3">
        {props.loading ?
        <div style={{textAlign: 'center'}}>
          <Spinner className="mt-5" animation="border" variant="primary" />
        </div>
        :
        <Container style={{marginTop: 30}}>
            <div style={{textAlign: 'center', marginBottom: 10}}>
                <h3 className="text-uppercase" >{ props.details.name }</h3>
            </div>

            <div style={{textAlign: 'center', marginBottom: 30}}>
                { props.details.description }
            </div>

            <Row>
                <Col style={{textAlign: 'right'}}>Date:</Col>
                <Col>{props.details.date}</Col>
            </Row>

            <Row>
                <Col style={{textAlign: 'right'}}>Author:</Col>
                <Col>{props.details.author}</Col>
            </Row>

            {props.details.city && (<Row>
                <Col style={{textAlign: 'right'}}>City:</Col>
                <Col>{props.details.city.name}</Col>
            </Row>)}

            <Row>
                <Col style={{textAlign: 'right'}}>Is free:</Col>
                <Col>{props.details.isFree ? 'YES' : 'NO'}</Col>
            </Row>

            {!props.details.isFree && (<Row>
                <Col style={{textAlign: 'right'}}>Price:</Col>
                <Col>{props.details.price}</Col>
            </Row>)}

            {props.details.category && (<Row>
                <Col style={{textAlign: 'right'}}>Category:</Col>
                <Col>{props.details.category.name}</Col>
            </Row>)}

        </Container>
        }
      </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.attractionDetails.loading,
        details: state.attractionDetails.details,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (id) => dispatch(getAttractionDetailsRequest(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (AttractionDetailsContainer)