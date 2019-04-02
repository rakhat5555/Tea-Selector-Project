function Tea() {
  this.type = [];
  this.style = [];
  this.flavor = [];
}

Tea.prototype.getTea = function(tea) {
  for (var i = 0; i < database.length; i++) {
    for (var j = 0; j < tea.type.length; j++) {
      console.log(tea.type[j]);
      console.log(database[i].type);

      if (tea.type[j] === database[i].type) {
        database[i].rank += 10;
        console.log(database[i].name + " = " + database[i].rank);
      };
      if (tea.style[j] === database[i].style) {
        database[i].rank += 10;
        console.log(database[i].name + " = " + database[i].rank);
      };
      if (tea.flavor[j] === database[i].flavor) {
        database[i].rank += 10;
        console.log(database[i].name + " = " + database[i].rank);
      };
    };
  };
  // console.log("Earl Grey Rank: " + database[0].rank);
  // console.log("Gunpowder Green Rank: " + database[1].rank);
  // console.log("Rose Hip Rank: " + database[2].rank);
};

var database = [
    { name: 'Earl Grey',
      type: 'black',
      style: 'energy',
      flavor: 'none',
      rank:  0
    },
    { name: 'Gunpowder Green',
      type: 'green',
      style: 'light',
      flavor: 'ginger',
      rank:  0
    },
    { name: 'Rose Hips',
      type: 'herbal',
      style: 'light',
      flavor: 'floral',
      rank:  0
    }
];


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
    tea.getTea(tea);

    $("#result").show();
    $(".result").append( "Your tea type requests: ");

  });
});
