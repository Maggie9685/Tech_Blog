const { Post } = require('../models');

const postdata = [
  {
    title: 'First day coding.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio.',
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.Morbi odio odio, elementum eu.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 3
  },
  {
    title: 'Cras mi pede.',
    content: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis.',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Vestibulum ante ipsum.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
