import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Stylesheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

function Button({iconName, onPress}) {
  return (
    <TouchableOpacity>
      <FontAwesome name={iconName} size={80} color={white}></FontAwesome>
    </TouchableOpacity>
  )
}

export default Button;