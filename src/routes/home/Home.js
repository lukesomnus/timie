/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cs from 'classnames';
import { Card, CardText, CardTitle } from 'material-ui';
import Link from '../../components/Link'
import s from './Home.css';
// import ToDoList from '../../components/ToDoList';

class Home extends React.Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //     content: PropTypes.string,
  //   })).isRequired,
  // };

  render() {
    return (
      // <div className={s.root}>
      //   <div className={s.container}>
      //     <h1>React.js News</h1>
      //     {this.props.news.map(item => (
      //       <article key={item.link} className={s.newsItem}>
      //         <h1 className={s.newsTitle}><a href={item.link}>{item.title}</a></h1>
      //         <div
      //           className={s.newsDesc}
      //           // eslint-disable-next-line react/no-danger
      //           dangerouslySetInnerHTML={{ __html: item.content }}
      //         />
      //       </article>
      //     ))}
      //   </div>
      // </div>

      // <ToDoList />

      <div className={cs(s.root, s.pluginGroup)}>

        <div className={s.pluginItem}>
          <Link to="/plugins/todoList">
            <Card >
              <CardTitle title="Todo List" subtitle="Manage your tasks" />
              <CardText>
                规划你的任务，记录每一步任务
          </CardText>
            </Card>
          </Link>
        </div>

        <div className={s.pluginItem}>
          <Link to="/plugins/timerecorder">
            <Card >
              <CardTitle title="Day Record" subtitle="record what you did this day" />
              <CardText>
                每天任务时间的总结
        </CardText>
            </Card>
          </Link>
        </div>
        <div className={s.pluginItem}>
          <Link to="/plugins/potato">
            <Card >
              <CardTitle title="Pototo Time" subtitle="Card subtitle" />
              <CardText>
                🍅番茄时间
        </CardText>
            </Card>
          </Link>
        </div>
        <div className={s.pluginItem}>
          <Card >
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>

            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
