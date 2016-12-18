var arrow = {
  findOdds: function( arr ){
    var odds = [];
    arr.forEach( num => {
      if( num % 2 !== 0 ) odds.push( num );
    } );
    return odds;
  },
  sum: ( x, y ) => x + y
}
