import React, { FC, PropsWithChildren, ReactNode } from "react";

import { NavigationMenu } from "common/components";

const MainPageWrapper: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
    return (
        <div>
            <NavigationMenu />
            { children }
        </div>
    );
};

export default MainPageWrapper;
