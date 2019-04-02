function Tea() {
  this.type = [];
  this.style = [];
  this.flavor = [];
}

$(document).ready(function() {
  $("form#selector").submit(function(event) {
    event.preventDefault();
    var tea = new Tea();
    $("input:checkbox[name=type]:checked").each(function() {
      tea.type.push($(this).val());
      });
    $("input:checkbox[name=style]:checked").each(function() {
      tea.style.push($(this).val());
      });
    $("input:checkbox[name=flavor]:checked").each(function() {
      tea.flavor.push($(this).val());
      });
    $("#result").show();
    $(".result").append( "Your tea type requests: " + tea.type[0]);

  });
});
