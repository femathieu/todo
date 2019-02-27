<?php

use Slim\Http\Response;
use Slim\Http\Request;
use Controllers\TodoCtrl;

$app->post('/todo/add', function(Request $request, Response $response, array $args){
    $todo = $request->getParams();
    $ctrl = new TodoCtrl($this);
    $ctrl->add($todo);
});

$app->get('/todo/list', function(Request $request, Response $response, array $args){
    $ctrl = new TodoCtrl($this);
    echo json_encode($ctrl->getList());
});

$app->get('/todo/mark-done/{id}/{value}', function(Request $req, Response $res, array $args){
    $ctrl = new TodoCtrl($this);
    $ctrl->markDone($args['id'], $args['value']);
});