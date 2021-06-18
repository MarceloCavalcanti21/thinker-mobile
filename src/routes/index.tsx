import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../screens/Welcome';
import { Decision } from '../screens/Decision';
import { Context } from '../screens/Context';
import { Vulnerability } from '../screens/Vulnerability';
import { Forces } from '../screens/Forces';

import { Go } from '../screens/Conclusions/Go';

const Page = createStackNavigator();

export function PageNavigation() {
    return (
        <Page.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Page.Screen name="Welcome" component={Welcome} />
            <Page.Screen name="Decision" component={Decision} />
            <Page.Screen name="Context" component={Context} />
            <Page.Screen name="Vulnerability" component={Vulnerability} />
            <Page.Screen name="Forces" component={Forces} />
            
            <Page.Screen name="Go" component={Go} />
        </Page.Navigator>
    )
}