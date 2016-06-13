<?php
/*
|--------------------------------------------------------------------------
| Merge files
|--------------------------------------------------------------------------
|
*/
    $files = [
        // LIBRARIES
        'lib/jquery.js',
        'lib/underscore.js',
        'lib/backbone.js',
        'lib/backbone.pclia.js',
        'lib/handlebars.js',
        'lib/handlebars.pclia.js',
        'lib/bootstrap.min.js',
        'lib/jquery.validate.js',
        'lib/default.js',
        'lib/highcharts.js',
        'lib/jquery.noty.js',
        'lib/top.js',
        'lib/topCenter.js',
        'lib/topLeft.js',
        'lib/topRight.js',
        // MODELS
        // VIEWS
        // OTHERS
        // MAIN
        'login.js',
        'inscription.js',
        'news.js',
        'newsCarousel.js',
    ];

    $js = '';
    foreach ($files as $file) {
        $js = $js . file_get_contents($file) . "\n";
    }

/*
|--------------------------------------------------------------------------
| Regroupe toutes les templates en une seule varaiable Js global
|--------------------------------------------------------------------------
|
*/
    $templates = [];
    $dirTemplate = 'templates/';
    foreach (glob($dirTemplate . '*.html') as $filename) {
        $viewName = str_ireplace('.html', '', $filename);
        $viewName = substr($viewName, strlen($dirTemplate));
        $content = file_get_contents($filename);
        $templates[$viewName] = preg_replace('/\s+/u', ' ', $content);
    }
    $jsonTemplate = json_encode($templates);

    header("Content-type: application/javascript");
    echo "var JST = {$jsonTemplate};\n";
    echo $js;
