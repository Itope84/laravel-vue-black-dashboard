<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  {{-- <link rel="apple-touch-icon" sizes="76x76" href="<%= webpackConfig.output.publicPath %>apple-icon.png"> --}}
  {{-- <link rel="icon" type="image/png" sizes="96x96" href="<%= webpackConfig.output.publicPath %>favicon.png"> --}}
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

  <title>Vue Black Dashboard Free</title>
  <!-- Bootstrap core CSS     -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5">

  <!--  Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet">
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <script src="{{asset('js/dashboard.js')}}" async></script>
</head>
<body>
<div class="wrapper" id="app">
    <router-view></router-view>
</div>
</body>
</html>
