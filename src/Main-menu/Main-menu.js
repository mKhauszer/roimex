import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class MainMenu extends React.Component {
    render() {
        return (
            <Drawer anchor="left" open={false} variant="permanent">
                <List>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Ingresos" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Gastos" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Impuestos" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Finanzas" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Reportes" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="CFDI(facturas)" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Trabajadores" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Nominas" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Otros documentos" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Contratos" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Busqueda" />
                    </ListItem>
                </List>
            </Drawer>
        )
    }
}