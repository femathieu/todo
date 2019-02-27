<?php

namespace Dao;

use Dao\Db;
use PDO;

class TodoDao extends Db{
    private $app;
    
    public function __construct($app){
        parent::__construct();

        $this->app = $app;
    }

    public function add($todo){
        $this->app->logger->info(__CLASS__. '->'.__METHOD__);
        if(!array_key_exists('label', $todo)){
            $todo['label'] = "";
        }
        if(!array_key_exists('description', $todo)){
            $todo['description'] = '';
        }
        $sql = "INSERT INTO todo (label, description) VALUES (:label, :descr)";
        $query = $this->db->prepare($sql);
        $query->execute(array(
            'label' => $todo['label'],
            'descr' => $todo['description']
        ));
    }

    public function getList(){
        $this->app->logger->info(__CLASS__.'->'.__METHOD__);

        $sql = "SELECT id, label, description, done FROM todo";
        $result = $this->db->query($sql);
        return $result->fetchAll(PDO::FETCH_ASSOC);
    }

    public function markDone($idTodo, $value){
        $this->app->logger->info(__CLASS__.'->'.__METHOD__);

        $sql = "UPDATE todo SET done = '$value' WHERE id = $idTodo";
        $this->db->query($sql);
    }
}