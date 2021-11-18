// 
import { connect } from "react-redux";
import { useState} from "react"
import Axios from "axios";

const BeneficiaryList = (props) => {

    let handleDel = () => {
        Axios.delete(props.axiosPort + 'beneficiaries/' + props.beneficiary._id)
        .then(res => {
            props.delBeneficiary(res.data)
        })
    }

    let beneficiary = props.beneficiary
    
    return (
        <>
        <div className="beneListContainer">
            <div className="beneListBox">
                <div className="beneName">
                    <h2>{props.beneficiary.name}</h2>
                </div>

                <div className="beneAddress">
                    <div>{props.beneficiary.address}</div>
                </div>

                <div className="beneContact">
                    <div>{props.beneficiary.contactNum}</div>
                </div>

                <div className="beneDesc">
                    <div>{props.beneficiary.description}</div>
                </div>

                <div className="beneWebsite">
                    <div>{props.beneficiary.website}</div>
                </div>
                
                <div className="benePhoto">
                    <div >
                        <img className="beneImg" src={props.axiosPort + props.beneficiary.photo} alt={props.beneficiary.name}/>
                    </div>
                </div>
            </div>
            <div>
                <button 
                    className="beneDelBtn"
                    onClick={handleDel}
                >Delete
                </button>

                <button 
                className="beneEditBtn"
                onClick={(e) => props.handleEditBtn(e, beneficiary)}>
                    Edit
                </button>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        axiosPort: state.navSlice.axiosPort,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delBeneficiary: (beneficiary) => dispatch ({
            type: 'DEL_BENEFICIARY',
            payload: beneficiary
        }),
        editBeneficiary: (beneficiary) => dispatch ({
            type: 'EDIT_BENEFICIARY',
            payload: beneficiary
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeneficiaryList);