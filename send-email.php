<?php 

require "sendgrid-php/sendgrid-php.php";

$email = $_POST['email'];

$from = new SendGrid\Email("macgirlsquiz@maccosmeticsph.com", "MAC Cosmetics PH");
$subject = "Your #MACGirls Quiz Result";
$to = new SendGrid\Email(null, $email);
$content = new SendGrid\Content("text/plain", "Hello, Email!");
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();

// header("location: index.html");


?>