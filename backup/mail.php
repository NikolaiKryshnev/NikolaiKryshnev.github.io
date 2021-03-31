<?php 
 
$sendto   = "MebelMK7@gmail.com"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$userphone = $_POST['phone']; // сохраняем в переменную данные полученные из поля c адресом электронной почты
$usertext = $_POST['text']; // сохраняем в переменную данные полученные из поля c источником перехода

 
// Формирование заголовка письма
$subject  = "Заявка с сайта Кухни Минск";
$headers  = "From: Новая кухня <info@srv67-h-st.jino.ru>\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>Имя заказчика:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Контакт заказчика:</strong> ".$userphone."</p>\r\n";
$msg .= "<p><strong>Сообщение от заказчика:</strong> ".$usertext."</p>\r\n";
$msg .= "</body></html>";
 
// отправка сообщения
@mail($sendto, $subject, $msg, $headers)
?>