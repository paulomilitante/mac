<?php 

require "sendgrid-php/sendgrid-php.php";

$email = $_POST['email'];

$from = new SendGrid\Email(null, "MAC Cosmetics PH");
$subject = "Your #MACGirls Quiz Result";
$to = new SendGrid\Email(null, $email);
$content = new SendGrid\Content("text/plain", "Hello, Email!");
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = "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";
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();

header("location: index.html");


?>