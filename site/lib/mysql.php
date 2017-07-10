<?php 

$connection = new PDO('mysql:host=localhost;dbname=_immigration;charset=utf8', 'root', 'fucktard');

//INSERT
//$connection->exec('INSERT INTO user VALUES (1, "somevalue")');


//Class
//
class User
{

    protected $id;
    protected $name;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

}

//Fetch
//
// $statement = $connection->query('SELECT * FROM user');

// while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
//     echo $row['username'] . ' ' . $row['email'];
// }
