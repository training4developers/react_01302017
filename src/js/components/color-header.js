import React from 'react';

export class ColorHeader extends React.Component {
    render() {

        const headerText = '<h1>Color Tool</h1>';

        return <div dangerouslySetInnerHTML={({ __html: headerText})}></div>;
    }
}