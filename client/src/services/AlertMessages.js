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
      text: 'You can\'t revert your action',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes Delete it!',
      cancelButtonText: 'No, Keep it!',
      showCloseButton: true,
      showLoaderOnConfirm: true,
      resultParams: {
        deleted: ['You successfully deleted this file', 'success'],
        canceled: ['Cancelled', 'Your file is still intact', 'info'],
      },
    };
  },
};
