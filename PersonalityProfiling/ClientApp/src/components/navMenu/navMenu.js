import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react'

export class NavMenu extends Component {
    displayName = NavMenu.name
    
    state = {
        //activeItem: "home"
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        //const { activeItem } = this.state;

        return (
        
        <Menu fluid vertical inverted >
            <Menu.Item
                name='home'
                as={ NavLink }
                to='/'>
                {/* active={activeItem === 'home'}
                onClick={this.handleItemClick}> */}
                <Icon name='braille' />
                Home
            </Menu.Item>
            <Menu.Item
                name='counter'
                as={ NavLink }
                to='/counter'>
                {/* active={activeItem === 'counter'}
                onClick={this.handleItemClick}> */}
                <Icon name='keyboard outline' />
                Counter
            </Menu.Item>
            <Menu.Item
                name='fetchData'
                as={ NavLink }
                to='/fetchData'>
                {/* active={activeItem === 'fetchData'}
                onClick={this.handleItemClick}> */}
                <Icon name='cloud' />
                Weather
            </Menu.Item>
            <Menu.Item
                name='questions'
                as={ NavLink }
                to='/questions'>
                {/* active={activeItem === 'questions'}
                onClick={this.handleItemClick}> */}
                <Icon name="user secret"/>
                Personality Profiler
            </Menu.Item>
        </Menu>
        );
    }
}