<?php
class Home_model extends CI_Model{

	//list catelog post
	function get_listcatelog(){
		$query = $this->db->query("select * from catelogy");
        return $query->result();
	}

	//list city
	function get_listcity(){
		$query = $this->db->query("SELECT * FROM `city` WHERE active = 0");
		return $query->result();
	}

	//list sell post
	// function get_listpostsell(){
	// 	$query = $this->db->query("SELECT `post`.`id`, `post`.`name`, `post`.`content`, `post`.`price`, `post`.`date_post`, `post`.`link_images`, `city`.`name` as citys, `catelogy`.`name` as catelogy ,`user`.`type_user` as type_user ,`types`.`name` as type FROM `post`,`city`,`catelogy`,`user`,`types` where `post`.`id_city` = `city`.`id` and `post`.`id_catelog` = `catelogy`.`id` and `post`.`id_user` = `user`.`id` and `post`.`id_type` = `types`.`id` and `types`.`id` = 2");
	// 	return $query->result();
	// }

}