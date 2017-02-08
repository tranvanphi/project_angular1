<?php
class Car_model extends CI_Model{

	//list sell post
	function get_listpost(){
		$query = $this->db->query("SELECT `post`.`id`, `post`.`name`, `post`.`content`, `post`.`price`, `post`.`date_post`, `post`.`link_images`, `city`.`name` as citys, `catelogy`.`name` as catelogy ,`user`.`type_user` as type_user ,`types`.`name` as type FROM `post`,`city`,`catelogy`,`user`,`types` where `post`.`id_city` = `city`.`id` and `post`.`id_catelog` = `catelogy`.`id` and `post`.`id_user` = `user`.`id` and `post`.`id_type` = `types`.`id` and `catelogy`.`id` = 1");
		return $query->result();
	}

}