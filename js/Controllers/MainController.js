
var server = "https://bookcatalogue.azurewebsites.net/";
var actionUrl = ["home/getall/","home/addbook/"];


app.controller('MainController', function ($scope, $http) {
    $scope.books = [];
    $scope.title = 'Book Catalogue';

    $scope.click = function (event) {
        document.getElementsByClassName("outer")[0].style.display = "block";
    }

    $scope.Match = function (pattern) {
       return function( item ) {
        if(pattern!=null){
          if(item.Name.toLowerCase().indexOf(pattern.toLowerCase())!=-1)
          {
            return item;
          }
          if(item.Author.toLowerCase().indexOf(pattern.toLowerCase())!=-1)
          {
            return item;
          }
        }
        else
        {
         return item ;
        }
      };
    }

     $scope.addbook = function () {

        var Name =  document.getElementById("name").value;
        var Author =  document.getElementById("author").value;
        var Price = document.getElementById("price").value;
        $http.post((server+actionUrl[1]), { 

            name: Name,
            author :Author,
            price : Price

        }).success(function (data, status, headers, config) {

           document.getElementsByClassName("outer")[0].style.display = "none";
           document.getElementById("name").value = "";
           document.getElementById("author").value = "";
           document.getElementById("price").value = "";

           switch(data) {
            case "Success":
              $scope.books.push({Author:Author,Name:Name,Price:Price});
              console.log($scope.books);
              break;
            default:
              console.log(data);
           }

        }).error(function (data, status, headers, config) {
            console.log(data);
            console.log(status);
        });
    }

    $http.get( (server+actionUrl[0]) ).success(function (data) {       

        $scope.books = data;
        console.log($scope.books);
        for (var i = 0; i < $scope.books.length; i++) {
            $scope.books[i].Price = $scope.books[i].Price.toFixed(2);
        }

    }).error(function (data, status, headers, config) {        
        console.log(data);
        console.log(status);
    });
});