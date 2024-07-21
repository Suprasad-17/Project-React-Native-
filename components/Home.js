// src/components/Home.js
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { profiles, posts, profileSuggestions } from '../data/dummyData';

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Homepage (like Instagram)</Text>

      {/* Top Story Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Stories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          {profiles.map(profile => (
            <View key={profile.id} style={styles.story}>
              <Image source={require('../assets/images.jpeg')} style={styles.storyImage} />
              <Text>{profile.name}</Text>
            </View>
          ))}

        </ScrollView>
      </View>
      

      {/* Posts Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Posts</Text>
        {posts.map(post => (
          <View key={post.id} style={styles.post}>
            <Image source={require('../assets/images (2).jpeg')} style={styles.postImage} />
            <Text><Text style={styles.postUser}>{post.user}</Text>: {post.content}</Text>
          </View>
        ))}
      </View>

      {/* Profile Suggestions Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Suggestions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          {profileSuggestions.map(profile => (
            <View key={profile.id} style={styles.suggestion}>
              <Image source={{ uri: profile.imageUrl }} style={styles.suggestionImage} />
              <Text>{profile.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Profile Icon */}
      <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Profile')}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileIconImage} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  post: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postUser: {
    fontWeight: 'bold',
  },
  suggestion: {
    marginRight: 10,
    alignItems: 'center',
  },
  suggestionImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  profileIconImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Home;
