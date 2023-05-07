import React from 'react';
import ThreadItem from '../component/ThreadItem';

const stories = {
  title: 'ThreadItem',
  component: ThreadItem,
};

export default stories;

function Template(args) {
  return <ThreadItem {...args} />;
}

export const DefaultThreadItem = Template.bind({});

DefaultThreadItem.args = {
  thread: {
    id: 'thread-01',
    title: 'example title',
    categoris: 'example',
    owner: {
      avatar: 'https://ui-avatars.com/api/?name=reza&background=random',
      name: 'Reza',
    },
    createdAt: '2022-11-13T09:59:31.019Z',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
};
