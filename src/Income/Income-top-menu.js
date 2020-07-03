import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default class IncomeTopMenu extends React.Component{
    render(){
        return(
        <AppBar position = "static"
                style={{ backgroundColor: '#FFFFFF', color : '#000000', fontWeight: '-moz-initial' }}>
          <Tabs 
            centered
            variant = "fullWidth">
            <Tab label ="Nuevo" style ={{fontWeight : "bold"}}></Tab>
            <Tab label ="Lista" style ={{fontWeight : "bold"}}></Tab>
            <Tab label ="Resumen" style ={{fontWeight : "bold"}}></Tab>
          </Tabs>
        </AppBar>
        )
    }
}