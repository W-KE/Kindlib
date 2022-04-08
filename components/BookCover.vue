<template>
  <img
    class="book-cover"
    width="160"
    height="240"
    alt="example"
    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  >
</template>

<script>
import Book from '../types/book';

export default {
  name: 'BookCover',
  props: {
    book: Book,
  },
};
</script>

<style scoped lang="scss">
.book-cover {
  object-fit: cover;
}
</style>
