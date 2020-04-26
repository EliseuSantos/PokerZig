import * as React from 'react';

interface LayoutContainerRenderProps {
    render?: () => React.ReactElement;
    children?: () => React.ReactElement;
}

const BaseLayoutContainer: React.FC<LayoutContainerRenderProps> = ({ render, children }) => {
    if (render) {
        return render();
    }

    if (children) {
        return children();
    }

    return null;
};

export default BaseLayoutContainer;
