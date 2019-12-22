<?php
$fio = $_POST['fio'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$tel = urldecode($tel);
$fio = trim($fio);
$tel = trim($tel);
// echo $fio;
// echo "<br>";
// echo $tel;
if (mail("zip2004zip@mail.ru", "Заявка с сайта", "Имя: ".$fio.". Tel: ".$tel ,"From: suninme@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
