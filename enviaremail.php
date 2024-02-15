<?php

$nome = utf8_encode($_POST['nome']);
$sobrenome = utf8_encode($_POST['telefone']);
$email = utf8_encode($_POST['email']);
$mensagem = utf8_encode($_POST['mensagem']);

require 'php-mailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();

// CONFIGURAÇÕES DO SERVIDOR DE EMAIL

$mail->Host = "smtp.gmail.com";
$mail->Port = "587";
$mail->SMTPSecure = "tls";
$mail->SMTPAuth = "true";
$mail->Username = "aio.app.ab@gmail.com"
$mail->Password = "rib3q543";

// Configurando a Mensagem

$mail->setFrom($mail->Username,"Izabelle Schmitt"); //Remetente
$mail->addAddress("aio.app.ab@gmail.com"); //Destinatário
$mail->subject = "Fale Conosco"; //Assunto do Email

$body_email = "
Você recebeu uma mensagem de $nome $sobrenome ($email):
<br><br>

Mensagem:<br>
$mensagem
";

$mail->isHTML(true);
$mail->Body = $body_email;

if ($mail->send()){
    echo "Email enviado com sucesso!"
}else{
    echo "Falha ao enviar" . $mail->ErrorInfo;
}



?>