// Model
var Kinekt4 = function() {
};

Kinekt4.prototype = {
  maxRows: 6,
  maxCols: 7,
  board: [
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],
  whoseTurn: function () {
    var redCount = $.map(this.board, function(n) {
      return n;
    }).filter(function(color){
      return color == "red";
    }).length;
    var blackCount = $.map(this.board, function(n) {
      return n;
    }).filter(function(color){
      return color == "black";
    }).length;
    return (redCount > blackCount) ? "black" : "red";
  },

  notWhoseTurn: function () {
    return (this.whoseTurn() === "red") ? "black" : "red";
  },

  addDot: function(col) {
    if (this.board[col].length < this.maxRows) {this.board[col].push(this.whoseTurn())}
  }
};

// Controller
$(function() {
  console.log("hello");
  game = new Kinekt4();
  game.whoseTurn();
  $("#turn").addClass("red");

  $("table#board td").on("click", function () {
    var col = $($(this).closest("tr").find("td")).index(this);
    game.addDot(col);
    showDot(game.board[col].length,col);
    showTurn();
  })
  $(".btn").on("click", function(){
    window.location.reload(true);
  })
});



// View
var showDot = function (row,col) {
  $("table#board tr:eq(-" + row + ") td:eq(" + col + ")").addClass(game.notWhoseTurn());
}

var showTurn = function () {
  $("#turn").toggleClass("black red");
}

