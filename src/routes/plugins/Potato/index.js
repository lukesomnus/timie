import React from 'react';
import Layout from '../../../components/Layout';
import Plugins from '../Plugins';

const title = 'Admin Page';

export default {

    path: '/potato',
    async action() {

        const Potato = await require.ensure([], require => require('../../../components/Potato').default, 'Potato');

        return {
            title,
            chunk: 'Potato',
            component: <Layout><Plugins><Potato /></Plugins></Layout>,
        };
    },

};