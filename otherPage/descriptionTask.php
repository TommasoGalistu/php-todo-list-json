<?php
$data = $_POST['descrizione'];


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- link bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/pageDescription.css">
    <title>Document</title>
</head>
<body>
    <div class="box">
        <div class="container text-center">
            <div class="row">
                <div class="col testo">
                    <?php echo $data ?>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">

                    <a href="../index.html">torna indietro</a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>