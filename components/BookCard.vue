<template>
  <div class="book-card">
    <BookCover :book="book" />
    <span>{{ book.title }}</span>
    <span>{{ book.author }}</span>
  </div>
</template>

<script>
import Book from '../types/book';

export default {
  name: 'BookCard',
  props: {
    book: Book,
  },
};
</script>

<style scoped lang="scss">
.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
