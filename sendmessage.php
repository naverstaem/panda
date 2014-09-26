<?php
$sendto   = "romaalupka@yandex.ru"; //Адреса, куда будут приходить письма
$phone  = $_POST['phone'];
$name  = $_POST['name'];
$email = $_POST['email'];
$ask = $_POST['ask'];
$color = $_POST['color'];
// Формирование заголовка письма
$subject  = "Новая заявка";
$headers  = "From: " . strip_tags($username) . "\r\n";
$headers .= "Reply-To: ". strip_tags($username) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новая заявка</h2>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
if( !empty($ask)) $msg .= "<p><strong>Вопрос:</strong> ".$ask."</p>\r\n";
if( !empty($color)) $msg .= "<p><strong>Цвет:</strong> ".$color."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>