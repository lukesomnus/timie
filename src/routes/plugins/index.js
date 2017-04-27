/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import React from 'react';
// import Layout from '../../components/Layout';

// const title = 'Admin Page';

export default {

    path: '/plugins',
    children: [
        require('./TodoList').default,
        require('./TimeRecorder').default,
        require('./Potato').default,
    ],
    async action({ next }) {
        // Execute each child route until one of them return the result
        const route = await next();
        return route;
    },

};
