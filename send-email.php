<?php 


$email = htmlspecialchars($_POST['email']);

mail($email,"Test Subject","Test");

header("location: index.html");


?>