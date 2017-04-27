import React from 'react';
import Layout from '../../../components/Layout';
import Plugins from '../Plugins';

const title = 'Admin Page';

export default {

    path: '/timerecorder',
    async action() {

        const TimeRecoder = await require.ensure([], require => require('../../../components/TimeRecorder').default, 'TimeRecoder');

        return {
            title,
            chunk: 'timeRecoder',
            component: <Layout><Plugins><TimeRecoder /></Plugins></Layout>,
        };
    },

};