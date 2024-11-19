
$('.add-books').on('click', function() {
  console.log('Clicked')
  $.ajax({
    method: 'GET',
    url: 'https://fakerapi.it/api/v2/books?_quantity=10',
    success: function(data) {
      $('#books-details').empty();

      data.data.forEach(function(book) {
        $('#books-details').append(`
          <div class="book">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Description: ${book.description}</p>
          </div>
        `);
      });
    },
    error: function(err) {
      console.error('Error fetching books:', err);
    }
  });
});
