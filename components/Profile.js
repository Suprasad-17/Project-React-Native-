// src/components/Profile.js
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { profileDetails } from '../data/dummyData';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image source={{ uri: profileDetails.imageUrl }} style={styles.profileImage} />
        <View style={styles.followInfo}>
          <Text style={styles.followText}>Followers: {profileDetails.followers}</Text>
          <Text style={styles.followText}>Following: {profileDetails.following}</Text>
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        <Text>Number of Posts: {profileDetails.posts.length}</Text>
      </View>

      {/* Third Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
        {profileDetails.posts.map(post => (
          <View key={post.id} style={styles.postCard}>
            <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  followInfo: {
    flexDirection: 'column',
  },
  followText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  section: {
    marginBottom: 20,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  postCard: {
    marginRight: 10,
  },
  postImage: {
    width: 300,
    height: 300,
  },
});

export default Profile;
