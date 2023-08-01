import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Response = Post[];

const Post = ({item}: {item: Post}) => {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Response>('https://jsonplaceholder.typicode.com/posts')
      .then(({data}) => {
        setPosts(data);
      });
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={Post}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={styles.postsContainer}
    />
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    gap: 20,
    padding: 20,
  },
  postContainer: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {},
});

export default PostsList;
