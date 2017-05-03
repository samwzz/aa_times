/* global $ */

// dropdown function that removes "hidden" class from dropdown while
// adding hideDropdown listener to document and cleaning up out-of-date listener
const revealDropdown = (event) => {
  event.stopPropagation(); // prevent event from being picked up by body
	$('#gear-dropdown').removeClass('hidden');
  $('#gear').addClass('rotated');
  $('#gear').removeClass('unrotated');
  $('#gear-dropdown-btn').off('click', revealDropdown);
  $(document).on('click', hideDropdown);
};

// add "hidden" class to dropdown and update event listeners
const hideDropdown = () => {
	$('#gear-dropdown').addClass('hidden');
  $('#gear').removeClass('rotated');
  $('#gear').addClass('unrotated');
  $('#gear-dropdown-btn').on('click', revealDropdown);
  $(document).off('click', hideDropdown);
};

// Add click listener to gear icon which invokes reveal function
$(() => $('#gear-dropdown-btn').on('click', revealDropdown));
