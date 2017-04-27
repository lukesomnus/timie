

import React from 'react';
import Layout from '../../../components/Layout';
import Plugins from '../Plugins';

const title = 'Admin Page';

export default {

    path: '/todoList',
    async action() {

        const ToDoList = await require.ensure([], require => require('../../../components/ToDoList').default, 'ToDoList');

        return {
            title,
            chunk: 'todoList',
            component: <Layout><Plugins><ToDoList /></Plugins></Layout>,
        };
    },

};
