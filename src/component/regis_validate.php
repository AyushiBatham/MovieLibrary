
<?php

  $Name=$_GET['Name'];
  $password=$_GET['password'];
  $email=$_GET['email'];

  $con=mysqli_connect("localhost","root","","fasal");
  $query="insert into userdata values('$Name','$email','$password')";

  $dataStore=mysqli_query($con,$query);
  if($dataStore){
    echo"reg";
    $resposne['data']=array(
        'status'=>'valid'
    );
   
  }
  else{
    $resposne['data']=array(
        'status'=>'invalid'
    );
    echo json_encode($resposne);
  }
?>
