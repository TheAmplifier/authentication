import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SignUp from '../imports/ui/signup';
import Link from '../imports/ui/link';


Meteor.startup( () => {
  ReactDOM.render(<Link />, document.getElementById('customerPortal'));
});