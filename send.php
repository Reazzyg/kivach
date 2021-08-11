<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
            if  (isset($_POST['theme'])) {
                // Переменные, которые отправляет пользователь
$email = $_POST['messageEmail'];
$theme = $_POST['theme'];
$message = $_POST['messageText'];


// Формирование самого письма
$title = "Новое сообщение Universal";
$body = "
<h2>Новое сообщение</h2>
<b>E-mail:</b> $email<br>
<b>Тема:</b> $theme<br>
<b>Сообщение:</b><br>$message

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 3;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://mail.hosting.reg.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mudroff@mudroff.site'; // Логин на почте
    $mail->Password   = 'qD7vN0nG6asE4r'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mudroff@mudroff.site', 'Семен Александрович'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mudrsemen@yandex.ru');  
     // Ещё один, если нужен

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('location: thankyou.html');
            }
            else if  (isset($_POST['Comment'])) {
                // Переменные, которые отправляет пользователь

$message = $_POST['Comment'];


// Формирование самого письма
$title = "Новый комментарий Universal";
$body = "
<h2>Новое комментарий</h2>
<br>$message

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 3;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://mail.hosting.reg.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mudroff@mudroff.site'; // Логин на почте
    $mail->Password   = 'qD7vN0nG6asE4r'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mudroff@mudroff.site', 'Семен Александрович'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mudrsemen@yandex.ru');  
     // Ещё один, если нужен

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');
            }
            else if  (isset($_POST['subscribe'])) {
                // Переменные, которые отправляет пользователь

$email = $_POST['subscribe'];


// Формирование самого письма
$title = "Новая заявка на рассылку Universal";
$body = "
<h2>Новое заявка</h2>
<br>E-mail: $email

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 3;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://mail.hosting.reg.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mudroff@mudroff.site'; // Логин на почте
    $mail->Password   = 'qD7vN0nG6asE4r'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mudroff@mudroff.site', 'Семен Александрович'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('mudrsemen@yandex.ru');  
     // Ещё один, если нужен

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');
            }
