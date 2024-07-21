// src/data/dummyData.js
export const profiles = [
  { id: 1, name: 'John Doe', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Alice Johnson', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Bob Brown', imageUrl: 'https://via.placeholder.com/150' },
];

export const posts = [
  { id: 1, user: 'John Doe', content: 'Hello World!', imageUrl: 'https://via.placeholder.com/600x400' },
  { id: 2, user: 'Jane Smith', content: 'Loving this!', imageUrl: 'https://via.placeholder.com/600x400' },
];

export const profileSuggestions = [
  { id: 1, name: 'Charlie Green', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Diana Prince', imageUrl: 'https://via.placeholder.com/150' },
];

export const profileDetails = {
  imageUrl: 'https://via.placeholder.com/150',
  followers: 120,
  following: 150,
  posts: [
    { id: 1, imageUrl: 'https://via.placeholder.com/600x400' },
    { id: 2, imageUrl: 'https://via.placeholder.com/600x400' },
    { id: 3, imageUrl: 'https://via.placeholder.com/600x400' },
  ],
};
