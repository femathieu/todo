<?php

namespace Controllers;

use Dao\TodoDao;

class TodoCtrl {
    private $dao;
    private $app;

    public function __construct($app){
        $this->dao = new TodoDao($app);
        $this->app = $app;
    }

    public function add($todo){
        $this->app->logger->info(__CLASS__.'->'.__METHOD__);
        return $this->dao->add($todo);
    }

    public function getList(){
        $this->app->logger->info(__CLASS__.'->'.__METHOD__);
        
        return $this->dao->getList();
    }

    public function markDone($todoId, $value){
        $this->app->logger->info(__CLASS__.'->'.__METHOD__);

        return $this->dao->markDone($todoId, $value);
    }
}