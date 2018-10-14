import React from 'react';
import Component from './component.js';
import PropTypes from "prop-types";
import classNames from 'classnames';
import Tag from './tag.js';

export default class Container extends Component  {


    static propTypes = {
        fluid : PropTypes.bool
    };

    static defaultProps = {
        fluid: false
    }

    render() {
        var {className, fluid, ...props} = this.props;

        className = classNames(className, {'container' : true});
        className = classNames(className, {'container-fluid' : fluid});

        return (
            <div className={className} {...props}>
                {this.props.children}
            </div>
        );
    }
};

Container.Row = class extends Component {

    static get defaultProps() {
        return {
        };
    }

    render() {
        var {className, ...props} = this.props;

        className = classNames(className, 'row');

        return (
            <div className={className} {...props}>
                {this.props.children}
            </div>
        );
    }
}

Container.Col = class extends Component {

    static propTypes = {
        xs    : PropTypes.number,
        sm    : PropTypes.number,
        md    : PropTypes.number,
        lg    : PropTypes.number,
        width : PropTypes.number
    };


    render() {

        var {className, xs, sm, md, lg, width, ...props} = this.props;

        className = classNames(className, 'col');

        className = classNames(className, {[`col-${xs}`]:width});
        className = classNames(className, {[`col-${xs}`]:xs});
        className = classNames(className, {[`col-sm-${sm}`]:sm});
        className = classNames(className, {[`col-md-${md}`]:md});
        className = classNames(className, {[`col-lg-${lg}`]:lg});

        return (
            <div className={className} {...props}>
                {this.props.children}
            </div>
        );
    }
}

Container.Row = class extends Component {


    static propTypes = {
        tag: PropTypes.string,
        className: PropTypes.string
    };
    
    static defaultProps = {
        tag: 'div',
        className: 'row'
    };

    render() {
        var {tag, className, ...props} = this.props;

        className = classNames(className, this.props.className);

        return (
            <Tag tag={tag} className={className} {...props}>
            </Tag>
        );
    }
}
