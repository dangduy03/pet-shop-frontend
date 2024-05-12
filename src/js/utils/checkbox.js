document.getElementById('selectAll').addEventListener('change', function() {
 var checkboxes = document.querySelectorAll('.checkbox-item');
 for (var i = 0; i < checkboxes.length; i++) {
   checkboxes[i].checked = this.checked;
 }
});

// Function to handle individual checkbox change
var checkboxes = document.querySelectorAll('.checkbox-item');
checkboxes.forEach(function(checkbox) {
 checkbox.addEventListener('change', function() {
   var selectAllCheckbox = document.getElementById('selectAll');
   var allChecked = true;
   checkboxes.forEach(function(checkbox) {
     if (!checkbox.checked) {
       allChecked = false;
     }
   });
   selectAllCheckbox.checked = allChecked;
 });
});