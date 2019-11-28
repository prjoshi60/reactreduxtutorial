import React, {Component} from 'react';
import StatusListItem from './StatusListItem';



const StatusList = ({items, canEditList, checkBoxStateChangeCallback, deletedUsers}) => {
    return (
        <div>
            <li>
                {
                    items.map((person, index) => (
                        <StatusListItem  key={index} canEditList={canEditList} item={person} checkBoxStateChange={checkBoxStateChangeCallback} deletedUsers={deletedUsers}></StatusListItem>
                    ))
                }
            </li>
        </div>
    );
}



export default StatusList;