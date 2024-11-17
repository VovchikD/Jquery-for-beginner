
$(document).on('turbo:load', function() {
  console.log('Turbo loaded');
  console.log($);
  $('.fetch-details').on('click', function() {
    const userId = $(this).data('id');
    $.ajax({
      url: `/users/${userId}`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        $('#user-details').html(`
          <h3>${data.name}</h3>
          <p>Email: ${data.email}</p>
          <p>Joined: ${data.created_at}</p>
        `);
      },
      error: function(xhr, status, error) {
        alert('Error fetching user details.');
      }
    });
  });
});
