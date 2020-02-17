$(document).ready(function() {
    // Dictionary to add id and amenity name
    let amens_dict = {};
    // Array to add amenity names in h4
    let amens_names = [];
    // Function to check
    $('input[type="checkbox"]').click(function (){
        // Store id of an amenity
        let amenity_id = $(this).attr('data-id');
        // Store name of an amenity
        let amenity_name = $(this).attr('data-name');
        // Determinate if is checked or not
        if($(this).is(":checked")) {
            // Add id and amenity at the dictionary
            amens_dict[amenity_name] = amenity_id;
            // Add amenity name at the array
            amens_names.push(amenity_name);
        }
        else {
        //else if ($(this).is(':not(:checked)')) {
            delete amens_dict[amenity_name];
            let idx = amens_names.indexOf(amenity_name);
            amens_names.splice(idx, 1);
        }
        if (amens_names.length !== 0) {
            $('.amenities h4').add('.amenities h4').text(amens_names);
        } else {
            // Clear h4 tag to keep position of box
            $('.amenities h4').empty().append('<h4>&nbsp;</4>');
        }
    });
});