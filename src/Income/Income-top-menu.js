import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class IncomeTopMenu extends React.Component{
    render(){
        return(
        <AppBar position = "static">
          <Tabs 
            centered
            variant = "fullWidth">
            <Tab label ="Nuevo"></Tab>
            <Tab label ="Lista"></Tab>
            <Tab label ="Resumen"></Tab>
          </Tabs>
        </AppBar>
        )
    }
}