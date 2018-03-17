export default {
  updateMessage() {
    return [
      'Great!',
      'Your post has been updated!',
      'success',
    ];
  },
  deleteMessage() {
    return {
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!' };
  },
};
