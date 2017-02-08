<?php
class Car extends CI_Controller{

	function __construct(){
        parent::__construct();     
    }

	public function list_Post(){
		$data = array();
		$this->load->model('car_model');
		$data = $this->car_model->get_listpost();
		$data = json_encode($data);
		echo $data;
		// echo "<pre>";
		// print_r($data);
		// echo "</pre>";
		
	}
}