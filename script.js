<script>
	jQuery(document).ready(function($) {
  $('#filter-checkboxes input[type="checkbox"], #product-type-checkboxes input[type="checkbox"], #application-checkboxes input[type="checkbox"], #sector-checkboxes input[type="checkbox"]').change(function() {
    var selectedCategories = $('#filter-checkboxes input[type="checkbox"]:checked').map(function() {
      return $(this).val();
    }).get();

    var selectedProductTypes = $('#product-type-checkboxes input[type="checkbox"]:checked').map(function() {
      return $(this).val();
    }).get();

    var selectedApplications = $('#application-checkboxes input[type="checkbox"]:checked').map(function() {
      return $(this).val();
    }).get();
    
    var selectedSectors = $('#sector-checkboxes input[type="checkbox"]:checked').map(function() {
      return $(this).val();
    }).get();

    // Hide all elements initially
    $('.agricultural, .residential, .commercial, .industrial, .pumps, .wires-cables, .solar, .borewells, .minipumps, .pharma, .food-beverages').hide();

    var filterClasses = [];

    if (selectedCategories.length > 0) {
      filterClasses.push(selectedCategories);
    }

    if (selectedProductTypes.length > 0) {
      filterClasses.push(selectedProductTypes);
    }

    if (selectedApplications.length > 0) {
      filterClasses.push(selectedApplications);
    }

    if (selectedSectors.length > 0) {
      filterClasses.push(selectedSectors);
    }

    if (filterClasses.length > 0) {
      var elementsToShow = $('.agricultural, .residential, .commercial, .industrial, .pumps, .wires-cables, .solar, .borewells, .minipumps, .pharma, .food-beverages');

      filterClasses.forEach(function(filterGroup) {
        var selector = filterGroup.map(function(cls) {
          return '.' + cls;
        }).join(',');

        elementsToShow = elementsToShow.filter(selector);
      });

      elementsToShow.show();
    } else {
      // Show all elements if no filters are selected
      $('.agricultural, .residential, .commercial, .industrial, .pumps, .wires-cables, .solar, .borewells, .minipumps, .pharma, .food-beverages').show();
    }
  });
});
</script>
