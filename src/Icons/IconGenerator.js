import React from 'react';
import SVGInline from 'react-svg-inline';

import styles from './icons.css';

export default function generateIcon (src, type) {

    var defaultWidth;
    var defaultHeight;
    var iconType = type || '';
    var viewBoxResult = /viewBox="(\d+|\d+\.\d+),? (\d+|\d+\.\d+),? (\d+|\d+\.\d+),? (\d+|\d+\.\d+)"/i.exec(src);
    if (viewBoxResult) {
        let numbers = viewBoxResult.slice(1).map(parseFloat);
        defaultWidth = numbers[2];
        defaultHeight = numbers[3];
    }

    return class Icon extends React.Component {
        shouldComponentUpdate () {
            return false;
        }

        render () {
            var width = (this.props.width || defaultWidth);
            var height = (this.props.height || defaultHeight);
            if (typeof width === 'number') {
                width = width + 'px';
            }

            if (typeof height === 'number') {
                height = height + 'px';
            }
            if (iconType === 'no_fill') {
                return (
                    <SVGInline
                        svg={src}
                        {...this.props}
                        width={width}
                        height={height}
                        className={`${styles.iconNoFill} ${this.props.className || ''}`.trim()}
                    />
                );
            } else {
                return (
                    <SVGInline
                        svg={src}
                        {...this.props}
                        width={width}
                        height={height}
                        className={`${styles.icon} ${this.props.className || ''}`.trim()}
                    />
                );
            }
        }
    };
}
