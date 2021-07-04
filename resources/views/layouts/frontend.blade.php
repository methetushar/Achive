<!doctype html>
<html lang="en">
<head>
    <link rel="shortcut icon" href="{{ asset('images/logo1.png') }}">
    <script>
        window.laravel={
            url:'{{url('/')}}'
        }
    </script>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Snippets for Development</title>
</head>
<body>
    <div id="app">
        <frontend-app></frontend-app>
    </div>
</body>

<script src="{{asset('js/frontend_app.js') }}"></script>
</html>
