<?php 

require "sendgrid-php/sendgrid-php.php";

$email = $_POST['email'];
// $prodname = $_POST['prodname'];
// $proddesc = $_POST['proddesc'];
// $image = $_POST['image'];

// $body = "<html>
// <body>
// <img src=$image>
// <h2>$prodname</h2>
// <p>$proddesc</p>
// </body>
// </html>"

$body = "<html>
<body>
TEST HTML EMAIL
</body>
</html>"

$from = new SendGrid\Email("MAC Cosmetics PH","macgirlsquiz@maccosmeticsph.com");
$subject = "Your #MACGirls Quiz Result";
$to = new SendGrid\Email(null, $email);
$content = new SendGrid\Content("text/html", $body);
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();

header("location: index.html");

?>