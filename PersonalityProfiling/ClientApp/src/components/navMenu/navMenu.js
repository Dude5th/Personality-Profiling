import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react'

export class NavMenu extends Component {
    displayName = NavMenu.name
    
    state = {
        activeItem: "home"
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
        
        <Menu fluid vertical inverted >
            <Menu.Item
                name='home'
                as={ Link }
                to='/'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}>
                <Icon name='braille' />
                Home
            </Menu.Item>
            <Menu.Item
                name='counter'
                as={ Link }
                to='/counter'
                active={activeItem === 'counter'}
                onClick={this.handleItemClick}>
            </Menu.Item>
            <Menu.Item
                name='fetchdata'
                as={ Link }
                to='/fetchdata'
                active={activeItem === 'fetchdata'}
                onClick={this.handleItemClick}>
            </Menu.Item>
            <Menu.Item
                name='questions'
                as={ Link }
                to='/questions'
                active={activeItem === 'questions'}
                onClick={this.handleItemClick}>
            </Menu.Item>
        </Menu>
        );
    }
}