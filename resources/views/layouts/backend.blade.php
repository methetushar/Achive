<!doctype html>
<html lang="en">
<head>
    <link rel="shortcut icon" href="{{ asset('images/logo1.png') }}">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script>
        window.laravel ={
            url:'{{url('/')}}'
        }
    </script>
    <title>Snippets for Development</title>
</head>
<body>
<div id="app">
    <backend-app></backend-app>
</div>
</body>

<script src="{{asset('js/app.js') }}"></script>
</html>
