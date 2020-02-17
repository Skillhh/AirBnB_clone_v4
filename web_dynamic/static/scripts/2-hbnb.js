$(document).ready(function () {
  // Dictionary to add id and amenity name
  const amens_dict = {};
  // Array to add amenity names in h4
  const amens_names = [];
  // Function to check
  $('input[type="checkbox"]').click(function () {
    // Store id of an amenity
    const amenity_id = $(this).attr('data-id');
    // Store name of an amenity
    const amenity_name = $(this).attr('data-name');
    // Determinate if is checked or not
    if ($(this).is(':checked')) {
      // Add id and amenity at the dictionary
      amens_dict[amenity_name] = amenity_id;
      // Add amenity name at the array
      amens_names.push(amenity_name);
    } else {
      // Delete element of dictioray
      delete amens_dict[amenity_name];
      // Delete element of array
      const idx = amens_names.indexOf(amenity_name);
      amens_names.splice(idx, 1);
    }
    // Show Amenities on .amenities h4
    if (amens_names.length !== 0) {
      $('.amenities h4').add(this).text(amens_names);
    } else {
      // Clear h4 tag to keep position of box
      $('.amenities h4').empty().append('<h4>&nbsp;</h4>');
    }
  });
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.getJSON(url, (data) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
