'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import {ReactNode} from 'react'

type ChildrenProps = {
    children: ReactNode;
}

export function Providers({ children }:ChildrenProps) {
    return (
        <Provider store={store}>
            {children}
            </Provider>
    )
};