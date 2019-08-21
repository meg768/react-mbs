import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

import Container from '../container';
import Tag from '../tag';
import {uniqueID} from '../utils';

export default function Form(props)  {

    var {className, tag, inline, ...props} = props;

    className = classNames(className, {'form': true});
    className = classNames(className, {'form-inline': inline});

    return (
        <Tag tag={tag} {...props} className={className}>
            {props.children}
        </Tag>

    );

};

Form.defaultProps = {
    tag: 'div',
    inline: false
}


Form.Group = function(props)  {

    var {row, className, ...other} = props;

    className = classNames(className, {'row': row});

    return (
        <Container.Col className={className} baseClassName='form-group'  {...other}>
            {props.children}
        </Container.Col>
    );
}

Form.Row = function(props) {

    var {tag = 'div', className, ...other} = props;
    className = classNames(className, 'form-row');

    return (
        <Tag tag={tag} {...other} className={className}>
            {props.children}
        </Tag>

    );
}

Form.Col = function(props) {

    return (
        <Container.Col {...props}>
            {props.children}
        </Container.Col>
    );
}

/*
Form.Input = function(props)  {


    var {plainText, tag, size, className, ...props} = props;

    className = classNames(className, {'form-control':true});
    className = classNames(className, {'form-control-sm':size=='sm'});
    className = classNames(className, {'form-control-lg':size=='lg'});
    className = classNames(className, {'form-control-plaintext':plainText});

    return (
        <Tag tag={tag} className={className} {...props}>
            {props.children}
        </Tag>

    );

};
*/

Form.Input = class extends React.Component {

    render() {
        var {children, plainText, tag, size, className, ...props} = this.props;

        className = classNames(className, {'form-control':true});
        className = classNames(className, {'form-control-sm':size=='sm'});
        className = classNames(className, {'form-control-lg':size=='lg'});
        className = classNames(className, {'form-control-lg':true});
        className = classNames(className, {'form-control-plaintext':plainText});
    
        return (
            <Tag tag={tag} className={className} {...props}>
                {children}
            </Tag>
    
        );
    
    }

};


Form.Input.defaultProps = {
    tag: 'input'
};



Form.Label = function(props)  {

    var {tag, className, inline, ...props} = props;

    className = classNames(className, {'col-form-label': inline});
    
    return (
        <Tag tag={tag} className={className} {...props}>
            {props.children}
        </Tag>
    );

};


Form.Label.defaultProps = {
    tag: 'label',
    inline: false
};

Form.Label.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    inline: PropTypes.bool
};


Form.Radio = function(props) {

    var {children, id, ...props} = props;

    id = (id == undefined) ? uniqueID() : id;

    return (
        <div className="custom-control custom-radio">
            <Tag tag='input' type="radio" id={id} className="custom-control-input" {...props}/>
            <label className="custom-control-label" htmlFor={id}>
                {children}
            </label>
        </div>
    );
}

Form.Checkbox = function(props) {

    var {children, id, ...props} = props;

    id = (id == undefined) ? uniqueID() : id;

    return (
        <div className="custom-control custom-checkbox">
            <Tag tag='input' type="checkbox" className="custom-control-input" id={id} {...props}/>
            <label className="custom-control-label" htmlFor={id}>
                {children}
            </label>
        </div>
    );
}

Form.Switch = function(props) {

    var {children, tag = 'div', id, ...props} = props;

    id = (id == undefined) ? uniqueID() : id;

    return (
        <Tag tag={tag} className="custom-control custom-switch">
            <Tag tag='input' id={id} className="custom-control-input" type="checkbox" {...props}/>
            <label className="custom-control-label" htmlFor={id}>
                {children}
            </label>
        </Tag>   
    );
}