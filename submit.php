<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $position = $_POST['position'];
    $address = $_POST['address'];
    $message = $_POST['message'];
    $resume = $_FILES['resume'];

    $to = "hope.ownyourlook24@gmail.com"; // Change this to your email address
    $subject = "Job Application from " . $firstName;
    
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"PHP-mixed-\" . uniqid();\r\n";

    $body = "--PHP-mixed-" . uniqid() . "\r\n";
    $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n";
    $body .= "\r\n";
    $body .= "Name: $firstName\n";
    $body .= "Email: $email\n";
    $body .= "Phone Number: $phoneNumber\n";
    $body .= "Position: $position\n";
    $body .= "Address: $address\n";
    $body .= "Message: $message\n";
    $body .= "\r\n";

    // Attach the resume
    if (isset($resume) && $resume['error'] == UPLOAD_ERR_OK) {
        $fileContent = file_get_contents($resume['tmp_name']);
        $fileContent = chunk_split(base64_encode($fileContent));

        $body .= "--PHP-mixed-" . uniqid() . "\r\n";
        $body .= "Content-Type: " . $resume['type'] . "; name=\"" . $resume['name'] . "\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"" . $resume['name'] . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "\r\n";
        $body .= $fileContent;
        $body .= "\r\n";
    }

    $body .= "--PHP-mixed-" . uniqid() . "--\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Form submitted successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error submitting the form. Please try again."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
