<?php 

require "sendgrid-php/sendgrid-php.php";

$email = $_POST['email'];
$name = $_POST['name'];

$from = new SendGrid\Email("MAC Cosmetics PH","macgirlsquiz@maccosmeticsph.com");
$subject = "Your #MACGirls Quiz Result";
$to = new SendGrid\Email($name, $email);
$content = new SendGrid\Content("text/plain", "Test Email Hello!");
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();

// header("location: index.html");

?>