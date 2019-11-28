import React, {Component} from 'react';
import { connect } from 'react-redux'
import StatusList from './StatusList';
import Buttons from './Buttons';
import { deleteItem, printItem, togglCheck } from './source/actions';


class Page extends Component {
  constructor(props){
    super(props);
    
  }

  render(){
    console.log('Page Renders', this.props);
    return (
        <div className="container">
          <Buttons></Buttons>
          <div className="listContainer">
            <StatusList items={this.props.users} canEditList={this.props.canEditList} checkBoxStateChangeCallback={this.props.toggleUserStatus} deletedUsers={this.props.deletedUsers} ></StatusList>
          </div>
          <div className="listContainer">
           {/* <StatusList items={this.props.deletedUsers}></StatusList>  */}
          </div>
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
      count: state.count, 
      users: state.users, 
      deletedUsers: {
        users:state.deletedUsers.userid, 
        count:state.deletedUsers.count
      },
      canEditList:state.canEdit
  }
}

const mapDispatchToProps = (dispach) => {
  return {
    toggleUserStatus: (data) => dispach({ type : 'TOGGLE_CHECK', args : data })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);