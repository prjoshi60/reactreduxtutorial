import React, {Component} from 'react';
import { deleteItem, printItem, togglCheck } from './source/actions';
import { connect } from 'react-redux';
import { createStore } from 'redux'; 
import reducer from './source/reducer';

const store = createStore(reducer);



class Buttons extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="btn-container" store={store}>
               <div>
                   <button className="btn-cls" onClick={this.props.addItem}>Add</button>
                   <button className="btn-cls" onClick={this.props.deleteItem}>Delete</button>
                   <button className="btn-cls" onClick={this.props.enableEdit}>Edit</button>
               </div>
            </div>
        );

    }; 
}

const mapStateToProps = (state) => {
   
}
    
const mapDispatchToProps = (dispach) => {
    return {
        addItem: () => dispach({ type : 'ADD_ITEM'}),
        deleteItem: () => dispach({ type : 'DELETE_ITEM'}), 
        enableEdit: () => dispach({ type : 'ENABLE_EDIT'})

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Buttons);
//export default connect(mapStateToProps, mapDispatchToProps)(Page);