<template>
  <a-row class="book-grid" :gutter="[16, 16]">
    <a-col
      v-for="book in books"
      :key="book.id"
      class="gutter-row"
      :xs="12"
      :sm="12"
      :md="8"
      :lg="6"
      :xl="4"
    >
      <div class="gutter-box">
        <BookCard :book="book" />
      </div>
    </a-col>
  </a-row>
</template>

<script>
import Book from '../types/book';

export default {
  name: 'BookGrid',
  data: () => ({
    books: [],
  }),
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      for (let id = 0; id < 50; id += 1) {
        this.books.push(new Book({
          id,
          title: '这是标题',
          author: '这是作者',
        }));
      }
    },
  },
};
</script>

<style scoped lang="scss">
.book-grid {
}
</style>
