// Create an array using .push with prompt and also using parseInt();
//Take 3 no & find max 

 var a =[];
  var no = parseInt(prompt(" input number 1"));
  a.push(no);
   var n1 = parseInt(prompt(" input number 2 "));
  a.push(n1);
    var n2 = parseInt(prompt(" input number 3 "));
   a.push(n2);
   console.log(a);

    if  ((a[0] >= a[1]) && (a[0] >=  a[2]))
    {
    alert(no + " is greater");
    }
    else if ((a[1] >= a[0]) && (a[1] >=  a[2]))
    { 
     alert(n1 + " is greater");
    }
    else { 
     alert(n2 + " is greater"); 
      }