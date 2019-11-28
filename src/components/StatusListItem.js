import React from 'react';


class StatusListItem extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            canEditList: props.canEdit,
            item: props.item,
            checkBoxStateChange: props.checkBoxStateChange,
            deletedUsers:props.deletedUsers

        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        if (nextProps.canEditList !== prevState.canEditList || nextProps.deletedUsers.count !== prevState.deletedUsers.count) {
            return {
                canEditList: nextProps.canEditList, 
                item:  nextProps.item, 
                checkBoxStateChange: nextProps.checkBoxStateChange,
                deletedUsers:nextProps.deletedUsers
            }
        }
    }
    handleCheckboxStateChange=(label)=> {
        this.state.checkBoxStateChange(label.target.id);
    }
    render() {
        return (
            <> 
                <div className = "listItem"> 
                    <div className = "userName"> { this.state.item.id + ") " + this.state.item.name }</div>
                    <div className="completedTasks"> {this.state.item.completedTasks}</div> 
                    <div className = "totalTasks" > { this.state.item.totalTasks} </div> 
                    <div>{ this.state.canEditList ? <input id={ this.props.item.id} type="checkbox" checked={this.props.item.checked} onChange={this.handleCheckboxStateChange} / >: null} </div> 
                </div>
            </> 
        );
}
}

export default StatusListItem;