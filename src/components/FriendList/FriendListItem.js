import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li class="item">
        <span class={isOnline ? "status-online" : "status-ofline"}></span>
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
    </li>
);

export default FriendListItem;
