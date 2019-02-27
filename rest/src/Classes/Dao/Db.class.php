<?php

namespace Dao;

use PDO;

class Db {
    const PARAM_HOTE = 'localhost';
    const PARAM_PORT = '3306';
    const PARAM_NAME_DB = 'todos';
    const PARAM_USER_NAME = 'root';
    const PARAM_USER_PWD = 'Mat06061998';
    public $db;
    
    public function __construct(){   
        $connectionStr = 'mysql:host='.self::PARAM_HOTE.';dbname='.self::PARAM_NAME_DB.';charset=utf8';

        try {
          $this->db = new PDO($connectionStr, self::PARAM_USER_NAME, self::PARAM_USER_PWD);
          $this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
          $this->db->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, 'SET NAMES \'UTF8\'');
        
        } catch(Exeption $e) {
          trigger_error($e-> getMessage());
          trigger_error($e-> getCode());
        }
    }
}
?>