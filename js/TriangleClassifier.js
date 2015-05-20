var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    if ( a==b ){
    	return "isosceles";
    } 

    if ( a==c ){
    	return "isosceles";
    } 

    if ( b==c ){
    	return "isosceles";
    } 



    	return "scalene";
  };

};
